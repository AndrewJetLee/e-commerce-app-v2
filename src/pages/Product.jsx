import styled from "styled-components";
import { useState, useEffect } from "react";
import { Remove, Add } from "@mui/icons-material/";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { publicRequest, asosRequest } from "../requestMethods";
import { addToCart } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../responsive";
import { editCart } from "../redux/apiCalls";

const Product = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await asosRequest.get(
          `/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`
        );
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);

  useEffect(() => {
    product.media && setActiveImage(product.media.images[0].url);
  }, [product]);

  const handleClickCounter = (action) => {
    if (action === "add") {
      count < 10 && setCount(count + 1);
    }
    if (action === "remove") {
      count > 1 && setCount(count - 1);
    }
  };

  const handleClickAddToCart = () => {
    let payload = {
      productId: product._id,
      price: product.price,
      quantity: count,
      color,
      size,
      image: product.image,
      title: product.title,
    };
    addToCart(dispatch, payload, user.currentUser.accessToken);
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Content>
          <Top>
            <Left>
              <ProductImages>
                {product.media?.images.map((image, i) => <ProductImage src={`https://${image.url}`}></ProductImage>)}
              </ProductImages>
              <ActiveProductImage
                src={`https://${activeImage}`}
              ></ActiveProductImage>
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
                    <SizeSelect>
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
                </SelectionBottom>
                <AdditionalInfo>
                  <Tags>
                    <span>TAGS:</span> COTTON, JACKETS, SHIRT
                  </Tags>
                </AdditionalInfo>
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
              <h3>Size & Fit</h3>
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
  ${mobile({ flexDirection: "column", width: "100vw", marginLeft: "0" })};
`;

const Top = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: "column", width: "100vw", marginLeft: "0" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10px;
`;

const Right = styled.div`
  flex: .7;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  line-height: 1.5;
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
`;

const ColorText = styled.span``;

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
`;

const SizeGuide = styled.a`
  color: inherit;
  font-size: 12px;
`;

const SelectionBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 20px 0;
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
  padding: 10px 55px;
  background-color: #757575;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const AdditionalInfo = styled.div`
  font-size: 12px;
  padding: 20px 0;
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
  h3 {
    color: #949393;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
    margin: 6px 0;
  }
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

const ProductCode = styled.div``;

const Brand = styled.div``;

const BottomRight = styled.div`
  width: 200px;
  flex: 1;
  padding-left: 50px;
`;

const SizeAndFit = styled.div``;

const WashInfo = styled.div``;

const Materials = styled.div``;
