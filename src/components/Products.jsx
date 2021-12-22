import styled from "styled-components";
import Product from "./Product";
import { featuredProducts } from "../dummyData";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async (req, res) => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:4000/api/products?category=${category}`
            : `http://localhost:4000/api/products/`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [products, category, filters]);

  return (
    <Container>
      {filteredProducts.map((item, key) => (
        <Product item={item} key={key} />
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
  ${mobile({ display: "flex", flexDirection: "column" })};
`;
