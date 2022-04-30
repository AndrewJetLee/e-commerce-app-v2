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
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  let baseUrl = `/v2/list/?limit=44&store=US&offset=${offset}`;

  useEffect(() => {
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

  const setAll = (res) => {
    setTitle(res.data.categoryName);
    setFiltered(res.data.products);
    setProducts(res.data.products);
    res.data.itemCount > offset + 45
      ? setHasNextPage(true)
      : setHasNextPage(false);
  };

  const getProducts = async () => {
    try {
      toggleLoading(true);
      if (query) {
        await getProductsWithQuery();
      } else if (category) {
        await getProductsWithCategory();
      } else {
        const res = await asosRequest.get(`${baseUrl}&categoryId=28235`);
        setAll(res);
      }
      toggleLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsWithQuery = async () => {
    try {
      if (categoryId) {
        const res = await asosRequest.get(
          `${baseUrl}&categoryId=${categoryId}&q=${query}`
        );
        setAll(res);
      } else {
        const res = await asosRequest.get(`${baseUrl}&q=${query}`);
        setAll(res);
      }
      const res = await asosRequest.get(
        `${baseUrl}&categoryId=${categoryId}&q=${query}`
      );
      setAll(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsWithCategory = async () => {
    try {
      const res = await asosRequest.get(`${baseUrl}&categoryId=${categoryId}`);
      setAll(res);
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
          setAll(res);
          toggleLoading(false);
        } else {
          toggleLoading(true);
          const res = await asosRequest.get(
            `${baseUrl}&q=${query}&sort=${sort}`
          );
          setAll(res);
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
      if (filter.category) {
        const res = await asosRequest.get(
          `${baseUrl}&categoryId=${filter.category}&sort=${sort}`
        );
        setAll(res);
        setCategoryId(filter.category);
      }
      if (filter.color) {
        let filtered = products.filter(
          (product, i) => product.colour?.toLowerCase() === filter.color
        );
        setFiltered(filtered);
      }
      toggleLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleLoadMore = async () => {
      const res = await asosRequest.get(
        `${baseUrl}&categoryId=${categoryId}${query ? `&q=${query}` : ""}${
          sort ? `&sort=${sort}` : ""
        }`
      );
      setFiltered([...filtered, ...res.data.products]);
      setProducts([...products, res.data.products]);
    };
    type !== "home" && handleLoadMore();
  }, [offset]);

  return (
    <>
      {type !== "home" && (
        <Title> {category ? title : `Showing results for: ${query}`}</Title>
      )}
      <Container>
        <Wrapper>
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
                .slice(0, 8)
                .map((item, key) => <Product item={item} key={key} />)
            : (category || query) &&
              !loading &&
              filtered?.map((item, key) => <Product item={item} key={key} />)}
        </Wrapper>
        {type !== "home" && hasNextPage && (
          <LoadWrapper onClick={() => setOffset(offset + 45)}>
            <LoadMore>LOAD MORE</LoadMore>
          </LoadWrapper>
        )}
      </Container>
    </>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: grid;
  width: 85%;
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

const LoadWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`;

const LoadMore = styled.button`
  border: 1px solid rgb(196, 193, 188);
  padding: 15px;
  width: 300px;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 32px;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  :hover {
    filter: brightness(80%);
  }
`;
