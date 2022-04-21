import styled from "styled-components";
import Product from "./Product";
import { mobile, tablet } from "../responsive";
import { useState, useEffect } from "react";
import { publicRequest, asosRequest } from "../requestMethods";
import { Skeleton } from "@mui/material";

const Products = ({ query, category, filters, sort, list, type, sortRef }) => {
  const [products, setProducts] = useState([]);
  const [requestUrl, setRequestUrl] = useState("");
  const [loading, toggleLoading] = useState(false);

  // if there is a category passed in,
  // make a request with that category

  // if there is a query passed in
  // make a request with that query

  // If the sort value is different from the original sort vaalue (prev sort value)
  // send a request with the sort included

  // type ? home, category, search

  useEffect(() => {
    const getProducts = async () => {
      try {
        toggleLoading(true);
        if (query) {
          getProductsWithQuery();
        } else if (category) {
          getProductsWithCategory();
        } else {
          const res = await asosRequest.get(
            `/v2/list/?categoryId=50060&limit=24&store=US&offset=0`
          );
          setProducts(res.data.products);
          setRequestUrl(
            `/v2/list/?categoryId=50060&limit=24&store=US&offset=0`
          );
        }
        toggleLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, query]);

  useEffect(() => {
    sortProducts();
  }, [sort]);

  const getProductsWithQuery = async () => {
    toggleLoading(true);
    try {
      const res = await asosRequest.get(
        `/v2/list?q=${query}&categoryId=50060&limit=24&store=US&offset=0`
      );
      setProducts(res.data.products);
      setRequestUrl(
        `/v2/list?q=${query}&categoryId=50060&limit=24&store=US&offset=0`
      );
      toggleLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsWithCategory = async () => {
    try {
      toggleLoading(true);
      const res = await asosRequest.get(
        `/v2/list?categoryId=${category}&limit=20&store=US&offset=0`
      );
      setProducts(res.data.products);
      setRequestUrl(
        `/v2/list?categoryId=${category}&limit=20&store=US&offset=0`
      );
      toggleLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const sortProducts = async () => {
    try {
      if (sortRef !== sort) {
        toggleLoading(true);
        const res = await asosRequest.get(`${requestUrl}&sort=${sort}`);
        setProducts(res.data.products);
      }
      toggleLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {loading &&
        Array(20)
          .fill("")
          .map(() => (
            <Skeleton
              variant="rectangular"
              width={300}
              height={380}
              sx={{
                marginBottom: "30px",
              }}
            />
          ))}
      {type === "home" && !loading
        ? products
            .slice(0, 20)
            .map((item, key) => <Product item={item} key={key} />)
        : (category || query) &&
          !loading &&
          products?.map((item, key) => <Product item={item} key={key} />)}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: grid;
  width: 98%;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin-left: 60px;
  ${tablet({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}
  ${mobile({ display: "flex", flexDirection: "column" })};
`;
