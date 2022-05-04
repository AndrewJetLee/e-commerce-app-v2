import styled from "styled-components";
import { useState, useEffect } from "react";
import { Remove, Add } from "@mui/icons-material/";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { publicRequest, asosRequest } from "../requestMethods";
import { addToCart } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { mobile, tablet } from "../responsive";
import { editCart } from "../redux/apiCalls";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Alert from "../components/Alert";

const Product = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);
  const [activeImage, setActiveImage] = useState(null);
  const [alertStatus, setAlertStatus] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await asosRequest.get(
          `/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);

  useEffect(() => {
    product.media && setActiveImage(`https://${product.media.images[0].url}`);
  }, [product]);

  const handleClickImage = (e) => {
    console.log(e.target.src);
    setActiveImage(e.target.src);
  };

  const handleClickCounter = (action) => {
    if (action === "add") {
      count < 10 && setCount(count + 1);
    }
    if (action === "remove") {
      count > 1 && setCount(count - 1);
    }
  };

  const handleClickAddToCart = () => {
    if (!user.currentUser) {
      handleAlert();
      return;
    }
    let payload = {
      productId: product.id,
      price: product.price.current.value,
      quantity: count,
      color: product.variants[0].colour,
      size,
      image: activeImage,
      title: product.name,
    };
    addToCart(dispatch, payload, user.currentUser.accessToken);
    handleAlert()
  };

  const handleAlert = () => {
    setAlertStatus(true);
    setTimeout(() => {
      setAlertStatus(false);
    }, 3000)
  }

  return (
    <>
      <Navbar hidden="true"/>
      <Container>
        {!user.currentUser ? (
          <Alert
            type="error"
            message="Must be logged in to add to cart!"
            status={alertStatus}
          ></Alert>
        ) : (
          <Alert
            type="success"
            message="Successfully added to cart!"
            status={alertStatus}
          ></Alert>
        )}

        <Content>
          <Top>
            <Left>
              <ProductImages>
                {product.media?.images.map((image, i) => (
                  <ProductImage
                    key={i}
                    active={`https://${image.url}` === activeImage}
                    onClick={handleClickImage}
                    src={`https://${image.url}`}
                  ></ProductImage>
                ))}
              </ProductImages>
              <ActiveProductImage src={activeImage}></ActiveProductImage>
            </Left>

            <Right>
              <Info>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price?.current.text}</ProductPrice>
              </Info>
              <Description>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </Description>
              <Selection>
                <SelectionTop>
                  <Color>
                    <TopTitle>COLOR:</TopTitle>
                    <ColorText>
                      {product.variants && product.variants[0].colour}
                    </ColorText>
                  </Color>
                  <Size>
                    <SizeLeft>
                      <TopTitle>SIZE: </TopTitle>
                      {product.sizeGuide && (
                        <SizeGuide href={product.sizeGuide}>
                          Size Guide
                        </SizeGuide>
                      )}
                    </SizeLeft>
                    <SizeSelect
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                    >
                      <option value="">Select size</option>
                      {product.variants?.map((variant, i) =>
                        variant.isInStock ? (
                          <option key={i} value={variant.displaySizeText}>
                            {variant.displaySizeText}
                          </option>
                        ) : (
                          <option key={i} value={variant.displaySizeText}>
                            {variant.displaySizeText} - Out of Stock
                          </option>
                        )
                      )}
                    </SizeSelect>
                  </Size>
                </SelectionTop>
                <SelectionBottom>
                  <Quantity>
                    <Counter>{count}</Counter>
                    <AddRemoveWrapper>
                      <AddWrapper onClick={() => handleClickCounter("add")}>
                        <Add className="addIcon icon" />
                      </AddWrapper>
                      <RemoveWrapper
                        onClick={() => handleClickCounter("remove")}
                      >
                        <Remove className="removeIcon icon" />
                      </RemoveWrapper>
                    </AddRemoveWrapper>
                  </Quantity>
                  <AddToCart onClick={handleClickAddToCart}>
                    ADD TO CART
                  </AddToCart>
                  <FavoriteButton>
                    <FavoriteIcon
                      className="favorite icon"
                      sx={{ "&:hover": { fill: "#757575" } }}
                    />
                  </FavoriteButton>
                </SelectionBottom>
                <ShippingInfo>
                  <DeliveryInfo>
                    <LocalShippingOutlinedIcon className="icon" /> Free Delivery
                  </DeliveryInfo>
                  <ReturnInfo>
                    <AssignmentReturnOutlinedIcon className="icon" /> Free
                    Returns
                  </ReturnInfo>
                  <OtherInfo>Ts&Cs apply.</OtherInfo>
                </ShippingInfo>
              </Selection>
            </Right>
          </Top>
          <Bottom>
            <BottomLeft>
              <h3>Product Details</h3>
              <ProductDetails
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></ProductDetails>
            </BottomLeft>
            <BottomMiddle>
              <ProductCode>
                <h3>Product Code</h3>
                <span>{product.productCode}</span>
              </ProductCode>
              <h3>Brand</h3>
              <Brand
                dangerouslySetInnerHTML={{ __html: product.brand?.description }}
              ></Brand>
            </BottomMiddle>
            <BottomRight>
              <h3>Size and Fit</h3>
              <SizeAndFit
                dangerouslySetInnerHTML={{ __html: product.info?.sizeAndFit }}
              ></SizeAndFit>
              <h3>Care Instructions</h3>
              <WashInfo
                dangerouslySetInnerHTML={{ __html: product.info?.careInfo }}
              ></WashInfo>
              <h3>About Me</h3>
              <Materials
                dangerouslySetInnerHTML={{ __html: product.info?.aboutMe }}
              ></Materials>
            </BottomRight>
          </Bottom>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Product;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Content = styled.div`
  max-width: 50%;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  ${mobile({
    flexDirection: "column",
    minWidth: "100%",
    marginLeft: "0",
    marginTop: "0",
  })};
`;

const Top = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: "column", width: "100vw", marginLeft: "0" })};
`;

const Left = styled.div`
  flex: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  ${mobile({ marginTop: "0" })};
`;

const ActiveProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProductImages = styled.div`
  flex: 1;
  min-width: 20%;
  display: flex;
  flex-direction: column;
  position: relative;
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
`;

const ProductImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
  :hover {
    filter: brightness(70%);
  }
  filter: ${(props) => props.active && "brightness(70%)"};
`;

const Right = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  line-height: 1.5;
  ${mobile({ marginLeft: "0", padding: "10px" })};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 20px 0;
`;

const ProductName = styled.span`
  font-size: 16px;
  padding: 4px 0;
  font-weight: 500;
`;

const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #636262;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  border-bottom: 1px solid lightgrey;
  padding: 12px 0;
  font-size: 14px;
`;

const Selection = styled.div``;

const SelectionTop = styled.div``;

const TopTitle = styled.h5`
  margin-right: 15px;
`;

const Color = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ColorText = styled.span`
  font-size: 14px;
`;

const Size = styled.div`
  display: flex;
  flex-direction: column;
`;

const SizeLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SizeSelect = styled.select`
  width: 100%;
  font-size: 14px;
  padding: 4px;
  margin-top: 5px;
`;

const SizeGuide = styled.a`
  color: inherit;
  font-size: 12px;
`;

const SelectionBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: space-between;
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  margin-right: 20px;
`;

const Counter = styled.span`
  height: 35px;
  width: 45px;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddRemoveWrapper = styled.div`
  display: flex
  flex-direction: column;
  height: 100%; 
  .icon {
    font-size: 14px; 
  }
`;

const AddWrapper = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-right: none;
  border-top: none;
  cursor: pointer;
`;

const RemoveWrapper = styled(AddWrapper)`
  border-left: 1px solid lightgrey;
  border-bottom: none;
`;

const AddToCart = styled.button`
  background-color: #757575;
  color: white;
  font-weight: 500;
  font-size: 16px;
  border-radius: 1px;
  height: 40px;
  width: 60%;
  text-align: center;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  :hover {
    filter: brightness(80%);
  }
`;

const FavoriteButton = styled.button`
  background-color: #eee;
  border-radius: 50%;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .favorite {
    fill: #eee;
    stroke: #757575;
    font-weight: 600;
    stroke-width: 2;
  }
`;

const ShippingInfo = styled.div`
  font-size: 12px;
  padding: 12px;
  border: solid 1px rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const DeliveryInfo = styled.span`
  display: flex;
  align-items: center;
  padding: 4px;
  .icon {
    margin-right: 8px;
    color: #636262;
  }
`;

const ReturnInfo = styled(DeliveryInfo)``;

const OtherInfo = styled.span`
  display: flex;
  justify-content: center;
`;

const Categories = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  span {
    font-weight: 500;
  }
`;
const Tags = styled(Categories)``;

const Bottom = styled.section`
  display: flex;
  font-size: 14px;
  margin-top: 30px;
  h3 {
    color: #636262;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
    margin: 6px 0;
  }
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const BottomLeft = styled.div`
  flex: 1;
`;

const ProductDetails = styled.div`
  a {
    color: inherit;
  }
  li {
    color: inherit;
  }
`;

const BottomMiddle = styled.div`
  flex: 1;
`;

const ProductCode = styled.div`
  margin-bottom: 20px;
`;

const Brand = styled(ProductCode)``;

const BottomRight = styled.div`
  width: 200px;
  flex: 1;
  padding-left: 50px;
  ${mobile({ paddingLeft: "0" })};
`;

const SizeAndFit = styled(ProductCode)``;

const WashInfo = styled(ProductCode)``;

const Materials = styled(ProductCode)``;
