import styled from "styled-components";
import Product from "./Product";
import { mobile, tablet } from "../responsive";
import { useState, useEffect } from "react";
import { publicRequest, asosRequest } from "../requestMethods";
import { Skeleton } from "@mui/material";

const Products = ({ query, category, filter, sortRef, sort, type }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(category);
  const [title, setTitle] = useState("");
  const baseUrl = "/v2/list/?limit=24&store=US&offset=0";

  useEffect(() => {
    const getProducts = async () => {
      try {
        toggleLoading(true);
        if (query) {
          await getProductsWithQuery();
        } else if (category) {
          await getProductsWithCategory();
        } else {
          const res = await asosRequest.get(`${baseUrl}&categoryId=50060`);
          setTitle(res.data.categoryName);
          setFiltered(res.data.products);
          setProducts(res.data.products);
        }
        toggleLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, query]);

  useEffect(() => {
    sort && sortProducts();
  }, [sort]);

  useEffect(() => {
    if (type !== "home") {
      Object.keys(filter).length > 0 && filterProducts();
    }
  }, [filter]);

  const getProductsWithQuery = async () => {
    try {
      if (categoryId) {
        const res = await asosRequest.get(
          `${baseUrl}&categoryId=${categoryId}&q=${query}`
        );
        setTitle(res.data.categoryName);
        setFiltered(res.data.products);
        setProducts(res.data.products);
      } else {
        const res = await asosRequest.get(`${baseUrl}&q=${query}`);
        setTitle(res.data.categoryName);
        setFiltered(res.data.products);
        setProducts(res.data.products);
      }
      const res = await asosRequest.get(
        `${baseUrl}&categoryId=${categoryId}&q=${query}`
      );
      setTitle(res.data.categoryName);
      setFiltered(res.data.products);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsWithCategory = async () => {
    try {
      const res = await asosRequest.get(`${baseUrl}&categoryId=${categoryId}`);
      setTitle(res.data.categoryName);
      setFiltered(res.data.products);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const sortProducts = async () => {
    try {
      if (sortRef !== sort) {
        if (categoryId) {
          toggleLoading(true);
          const res = await asosRequest.get(
            `${baseUrl}&categoryId=${categoryId}&sort=${sort}`
          );
          setTitle(res.data.categoryName);
          setFiltered(res.data.products);
          setProducts(res.data.products);
          toggleLoading(false);
        } else {
          toggleLoading(true);
          const res = await asosRequest.get(
            `${baseUrl}&q=${query}&sort=${sort}`
          );

          setTitle(res.data.categoryName);
          setFiltered(res.data.products);
          setProducts(res.data.products);
          toggleLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filterProducts = async () => {
    setFiltered(products);
    try {
      toggleLoading(true);
      // if (filter.sex) {
      //   if (filter.sex === "men") {
      //     const res = await asosRequest.get(`${requestUrl}&categoryId=${filter.category}`);
      //     setFiltered(res.data.products);
      //     setProducts(res.data.products);
      //   }
      //   if (filter.sex === "women") {
      //     const res = await asosRequest.get(`${requestUrl}&categoryId=${filter.category}`);
      //     setFiltered(res.data.products);
      //     setProducts(res.data.products);
      //   }
      // }

      if (filter.category) {
        const res = await asosRequest.get(
          `/v2/list?categoryId=${filter.category}&limit=20&store=US&offset=0`
        );
        setTitle(res.data.categoryName);
        setCategoryId(filter.category);
        setFiltered(res.data.products);
        setProducts(res.data.products);
      }
      if (filter.color) {
        let filtered = products.filter(
          (product, i) => product.colour.toLowerCase() === filter.color
        );
        setFiltered(filtered);
      }
      toggleLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {type !== "home" && (
        <Title> {category ? title : `Showing results for: ${query}`}</Title>
      )}

      <Container>
        {loading &&
          Array(20)
            .fill("")
            .map((item, i) => (
              <Skeleton
                variant="rectangular"
                width={300}
                height={380}
                sx={{
                  marginBottom: "30px",
                }}
                key={i}
              />
            ))}
        {type === "home" && !loading
          ? products
              .slice(0, 20)
              .map((item, key) => <Product item={item} key={key} />)
          : (category || query) &&
            !loading &&
            filtered?.map((item, key) => <Product item={item} key={key} />)}
      </Container>
    </>
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

const Title = styled.h1`
  position: relative;
  top: -150px;
  padding-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
  ${mobile({ textAlign: "center" })};
`;
