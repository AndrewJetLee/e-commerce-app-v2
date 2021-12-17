import styled from "styled-components";
import { Box, Rating } from "@mui/material/";
import { useState } from "react";
import { Remove, Add } from "@mui/icons-material/";
import Dropdown from "../components/Dropdown";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

let ColorChoices = ["Beige", "Black", "White"];
let SizeChoices = ["XL", "S", "M", "L", "XL"];

const Product = () => {
  const [rating, setRating] = useState(2);
  const [color, setColor] = useState("Beige");
  const [size, setSize] = useState("S");
  const [count, setCount] = useState(1);

  const handleChangeDropdown = (event, label) => {
    if (label === "color") setColor(event.target.value);
    if (label === "size") setSize(event.target.value);
  };

  const handleClickCounter = (action) => {
    if (action === "add") {
      count < 10 && setCount(count + 1);
    }
    if (action === "remove") {
      count > 0 && setCount(count - 1);
    }
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Content>
          <Left>
            <ProductImage src="https://cdn.shopify.com/s/files/1/2712/5012/products/essentials-sixth-hoodie-beige-urban-clothing-shop-659_480x480.jpg?v=1635315778"></ProductImage>
          </Left>

          <Right>
            <Info>
              <Title>ESSENTIALS HOODIE</Title>
              <Price>$120.00</Price>
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
                    choices={ColorChoices}
                  />
                </Color>
                <Size>
                  <TopTitle>Size</TopTitle>
                  <Dropdown
                    value={size}
                    handleChangeDropdown={handleChangeDropdown}
                    label={"size"}
                    choices={SizeChoices}
                  />
                </Size>
              </Top>
              <Bottom>
                <AddToCart>ADD TO CART</AddToCart>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  min-width: 400px;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  margin-left: 20px;
  margin-top: 50px;
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
