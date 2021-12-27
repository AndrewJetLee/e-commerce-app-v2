import styled from "styled-components";
import { Box, Rating } from "@mui/material/";
import { useState, useEffect } from "react";
import { Remove, Add } from "@mui/icons-material/";
import Dropdown from "../components/Dropdown";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

const Product = () => {
  
  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  
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
    }
    getProduct();
  }, [id])

  
  useEffect(() => {
    product.color && setColor(product.color[0]);
    product.size && setSize(product.size[0]);
  }, [product])

  const handleChangeDropdown = (event, label) => {
    if (label === "color") setColor(event.target.value);
    if (label === "size") setSize(event.target.value);
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
    let payload = {
      ...product,
      price: product.price,
      quantity: count,
      color,
      size,
    };
    dispatch(addProduct(payload));

  }

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
              <Title>{product.title}</Title>
              <Price>${product.price}</Price>
              <Box>
                <Rating
                  name="productRating"
                  value={rating}
                  onChange={(e, newRating) => setRating(newRating)}
                />
              </Box>
            </Info>

            <Selection>
              <Top>
                <Color>
                  <TopTitle>Color</TopTitle>
                  <Dropdown
                    value={color}
                    handleChangeDropdown={handleChangeDropdown}
                    label={"color"}
                    choices={product.color}
                  />
                </Color>
                <Size>
                  <TopTitle>Size</TopTitle>
                  <Dropdown
                    value={size}
                    handleChangeDropdown={handleChangeDropdown}
                    label={"size"}
                    choices={product.size}
                  />
                </Size>
              </Top>
              <Bottom>
                <AddToCart onClick={handleClickAddToCart}>ADD TO CART</AddToCart>
                <Quantity>
                  <Remove
                    className="removeIcon icon"
                    onClick={() => handleClickCounter("remove")}
                  />
                  <Counter>{count}</Counter>
                  <Add
                    className="addIcon icon"
                    onClick={() => handleClickCounter("add")}
                  />
                </Quantity>
              </Bottom>
            </Selection>
          </Right>
        </Content>
      </Container>
      <Footer/>
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
  justify-content: space-between; 
  margin-bottom: 50px; 
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: center; 
  margin-left: 150px; 
  ${mobile({ flexDirection: "column",
              width: "100vw",
              marginLeft: "0",

  })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center; 
  justify-content: center; 
`;

const ProductImage = styled.img`
  height: 400px;
  width: 400px;
  min-width: 400px;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  margin-left: 50px; 
  line-height: 1.5;
`;

const Title = styled.h1``;
const Info = styled.div`
  padding-top: 30px;
  padding-left: 30px;
`;

const Price = styled.span`
  font-size: 34px;
`;

const Selection = styled(Info)``;

const Top = styled.div``;

const TopTitle = styled.h3`
  margin-bottom: 10px;
`;

const Color = styled.div`
  margin-top: 20px;
`;

const Size = styled(Color)``;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  .icon {
    margin: 0 8px;
  }
`;

const Counter = styled.span`
  border: 1px solid gray;
  height: 25px;
  width: 25px;
  padding: 8px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddToCart = styled.button`
  padding: 12px 59px;
  background-color: teal;
  color: white;
  font-weight: 500;
  font-size: 16px;
`;
