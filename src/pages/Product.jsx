import styled from "styled-components";
import { Box, Rating } from "@mui/material/";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

let ColorChoices = ["Beige", "Black", "White"];
let SizeChoices = ["XL", "S", "M", "L", "XL"];

const Product = () => {
  const [rating, setRating] = useState(2);
  const [color, setColor] = useState("Beige");
  const [size, setSize] = useState("S");

  const handleChangeDropdown = (event, label) => {
    if (label === "color") setColor(event.target.value);
    if (label === "size") setSize(event.target.value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
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
              <Quantity></Quantity>
              <AddToCart></AddToCart>
            </Bottom>
          </Selection>
        </Right>
      </Content>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Right = styled.div`
  flex: 1;
  margin-left: 20px;
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

const Bottom = styled.div``;
const Quantity = styled.div``;
const AddToCart = styled.button``;
