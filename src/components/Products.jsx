import styled from "styled-components";
import Product from "./Product";
import { featuredProducts } from "../dummyData";

const Products = () => {
  return (
    <Container>
      {featuredProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
`;
