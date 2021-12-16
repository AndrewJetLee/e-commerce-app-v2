import styled from "styled-components";
import { Box, Rating, FormControl, Select, MenuItem } from "@mui/material/";
import { useState } from "react";

const Product = () => {
  const [rating, setRating] = useState(2);
  const [color, setColor] = useState("Beige");
  const [size, setSize] = useState("S");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Container>
      <Left>
        <ProductImage src="https://cdn.shopify.com/s/files/1/2712/5012/products/essentials-sixth-hoodie-beige-urban-clothing-shop-659_480x480.jpg?v=1635315778"></ProductImage>
      </Left>

      <Right>
        <Title>ESSENTIALS HOODIE</Title>
        <Info>
          <Box>
            <Rating
              name="productRating"
              value={rating}
              onChange={(e, newRating) => setRating(newRating)}
            />
          </Box>

          <Price>$120.00</Price>
        </Info>

        <Selection>
          <Top>
            <Color>
              <h3>Color</h3>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={color}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  
                >
                  <MenuItem value={"Beige"}>Beige</MenuItem>
                  <MenuItem value={"Black"}>Black</MenuItem>
                  <MenuItem value={"White"}>White</MenuItem>
                </Select>
              </FormControl>
            </Color>
            <Size></Size>
          </Top>
          <Bottom>
            <Quantity></Quantity>
            <AddToCart></AddToCart>
          </Bottom>
        </Selection>
      </Right>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  background-color: pink;
  flex: 1;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Right = styled.div`
  background-color: teal;
  flex: 1;
`;

const Title = styled.h1``;
const Info = styled.div``;

const Price = styled.span`
  font-size: 34px;
`;

const Selection = styled.div``;

const Top = styled.div``;
const Color = styled.div``;
const Size = styled.div``;

const Bottom = styled.div``;
const Quantity = styled.div``;
const AddToCart = styled.button``;
