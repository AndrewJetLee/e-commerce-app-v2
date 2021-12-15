import styled from "styled-components";
import Product from "./Product";
import { featuredProducts } from "../dummyData";

const Products = () => {
  return (
    <>
      <Title>Featured Products</Title>
      <Container>
        {featuredProducts.map((item) => <Product item={item}/>)}
      </Container>
    </>
  );
};

export default Products;

const Title = styled.h1`
    text-align: center; 
    padding-top: 40px; 
    padding-bottom: 25px; 
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px; 
`;
