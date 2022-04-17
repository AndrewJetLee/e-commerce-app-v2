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
          <Left>
            <ProductImage
              src={`https://${product.media?.images[0].url}`}
            ></ProductImage>
          </Left>

          <Right>
            <Info>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price?.current.text}</ProductPrice>
            </Info>
            <Description>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </Description>
            <Selection>
              <Top>
                <Color>
                  <TopTitle>COLOR:</TopTitle>
                  <ColorText>{product.variants && product.variants[0].colour}</ColorText>
                </Color>
                <Size>
                  <TopTitle>SIZE: </TopTitle>
                  <SizeSelect>
                    {product.variants?.map((variant, i) =>
                      variant.isInStock ? (
                        <option value={variant.displaySizeText}>
                          {variant.displaySizeText}
                        </option>
                      ) : (
                        <option value={variant.displaySizeText}>
                          {variant.displaySizeText} - Out of Stock
                        </option>
                      )
                    )}
                  </SizeSelect>
                  {product.sizeGuide && (
                    <SizeGuide href={product.sizeGuide}>Size Guide</SizeGuide>
                  )}
                </Size>
              </Top>
              <Bottom>
                <Quantity>
                  <Counter>{count}</Counter>
                  <AddRemoveWrapper>
                    <AddWrapper onClick={() => handleClickCounter("add")}>
                      <Add className="addIcon icon" />
                    </AddWrapper>
                    <RemoveWrapper onClick={() => handleClickCounter("remove")}>
                      <Remove className="removeIcon icon" />
                    </RemoveWrapper>
                  </AddRemoveWrapper>
                </Quantity>
                <AddToCart onClick={handleClickAddToCart}>
                  ADD TO CART
                </AddToCart>
              </Bottom>
              <AdditionalInfo>
                <Categories>
                  {/* <span>CATEGORIES:</span> {product.categories?.join(", ")} */}
                </Categories>
                <Tags>
                  <span>TAGS:</span> COTTON, JACKETS, SHIRT
                </Tags>
              </AdditionalInfo>
            </Selection>
          </Right>
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
  width: 55%;
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: "column", width: "100vw", marginLeft: "0" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  min-width: 400px;
  object-fit: contain;
`;

const Right = styled.div`
  flex: 1;
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

const ProductPrice = styled.span``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  border-bottom: 1px solid lightgrey;
  padding: 12px 0;
  font-size: 14px;
`;

const Selection = styled.div``;

const Top = styled.div``;

const TopTitle = styled.h5`
  margin-right: 15px;
`;

const Color = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const ColorText = styled.span``


const Size = styled(Color)``;

const SizeSelect = styled.select`
  width: 180px;
`;

const SizeGuide = styled.a``;

const Bottom = styled.div`
  display: flex;
  align-items: center;
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
  padding: 8px 24px;
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
