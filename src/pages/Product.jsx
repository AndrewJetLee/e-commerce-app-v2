import styled from "styled-components";
import { Box, Rating } from "@mui/material/";
import { useState, useEffect } from "react";
import { Remove, Add } from "@mui/icons-material/";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct, reset } from "../redux/cartSlice";
import { addToCart } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    product.color && setColor(product.color[0]);
    product.size && setSize(product.size[0]);
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
    };
    addToCart(dispatch, payload);
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Content>
          <Left>
            <ProductImage src={product.image}></ProductImage>
          </Left>

          <Right>
            <Info>
              <InfoLeft>
                <Title>{product.title}</Title>
                <Price>${product.price}</Price>
              </InfoLeft>
              <InfoRight>
                <Box>
                  <Rating
                    name="productRating"
                    value={rating}
                    onChange={(e, newRating) => setRating(newRating)}
                  />
                </Box>
                <ProductNumber>
                  <strong>SKU:</strong> {product._id}
                </ProductNumber>
              </InfoRight>
            </Info>
            <Description>
              <p>{product.description}</p>
            </Description>
            <Selection>
              <Top>
                <Color>
                  <TopTitle>COLOR</TopTitle>
                  <FilterColors>
                    {product.color?.map((color, key) => (
                      <FilterColor
                        onClick={(e) => {
                          setColor(color);
                        }}
                        color={color}
                        key={key}
                      />
                    ))}
                  </FilterColors>
                </Color>
                <Size>
                  <TopTitle>SIZE</TopTitle>
                  <FilterSizes>
                    {product.size?.map((size, key) => (
                      <FilterSize
                        onClick={(e) => {
                          setSize(size);
                        }}
                        key={key}
                      >
                        {size}
                      </FilterSize>
                    ))}
                  </FilterSizes>
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
                  <span>CATEGORIES:</span> {product.categories?.join(", ")}
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
  min-height: 60vh;
  max-height: 100vh;
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
  height: 500px;
  width: 500px;
  min-width: 400px;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  line-height: 1.5;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  padding: 2px 0;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 20px 0;
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  height: 100%;
`;

const ProductNumber = styled.span`
  font-size: 12px;
  strong {
    font-weight: 500;
  }
`;

const Price = styled.span``;

const Description = styled.div`
  display: flex;
  align-items: center;
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

const FilterColors = styled.div`
  display: flex;
`;

const FilterColor = styled.div`
  width: 31px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSizes = styled.div`
  display: flex;
  margin-left: 19px;
  .clicked {
    color: rgb(35, 35, 35);
  }
`;

const FilterSize = styled.div`
  width: 31px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
  border: 1px solid;
  color: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  :hover,
  :active {
    color: rgb(35, 35, 35);
  }
`;

const Size = styled(Color)``;

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
