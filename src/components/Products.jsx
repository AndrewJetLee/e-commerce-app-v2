import styled from "styled-components";
import Product from "./Product";
import { mobile, tablet } from "../responsive";
import { useState, useEffect } from "react";
import { publicRequest, asosRequest } from "../requestMethods";

const Products = ({ query, category, filters, sort, list }) => {
  const [products, setProducts] = useState([]);
  const [requestUrl, setRequestUrl] = useState("");

  useEffect(() => {
    setProducts(list);
  }, [list]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (query) {
          const res = await asosRequest.get(
            `/v2/list?q=${query}&categoryId=50060&limit=24&store=US&offset=0`
          );
          setProducts(res.data.products);
          setRequestUrl(
            `/v2/list?q=${query}&categoryId=50060&limit=24&store=US&offset=0`
          );
        } else if (list && category) {
          const res = await asosRequest.get(
            `/v2/list?categoryId=${category}&limit=20&store=US&offset=0`
          );
          setProducts(res.data.products);
          setRequestUrl(
            `/v2/list?categoryId=${category}&limit=20&store=US&offset=0`
          );
        } else {
          const res = await asosRequest.get(
            `/v2/list/?categoryId=50060&limit=24&store=US&offset=0`
          );
          setProducts(res.data.products);
          setRequestUrl(
            `/v2/list/?categoryId=50060&limit=24&store=US&offset=0`
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, query, list]);

  useEffect(() => {
    const sortProducts = async () => {
      try {
        if (query) {
          const res = await asosRequest.get(`${requestUrl}&sort=${sort}`);
          setProducts(res.data.products);
        } else if (list && category) {
          const res = await asosRequest.get(`${requestUrl}&sort=${sort}`);
          setProducts(res.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };
    sortProducts();
  }, [sort]);

  return (
    <Container>
      {category
        ? products?.map((item, key) => <Product item={item} key={key} />)
        : products?.length > 0 &&
          products
            .slice(0, 20)
            .map((item, key) => <Product item={item} key={key} />)}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: grid;
  width: 98%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin-left: 60px;
  ${tablet({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}
  ${mobile({ display: "flex", flexDirection: "column" })};
`;
