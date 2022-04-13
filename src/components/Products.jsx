import styled from "styled-components";
import Product from "./Product";
import { mobile, tablet } from "../responsive";
import { useState, useEffect } from "react";
import { publicRequest, asosRequest } from "../requestMethods";

const Products = ({ query, category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async (req, res) => {
  //     try {
  //       if (query) {
  //         const res = await publicRequest.get(
  //           `/products?keyword=${query}`
  //         );
  //         setProducts(res.data);
  //       } else {
  //         const res = await publicRequest.get(
  //           category
  //             ? `/products?category=${category}`
  //             : `/products/`
  //         );
  //         setProducts(res.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProducts();
  // }, [category, query]);

  useEffect(() => {
    const getProducts = async (req, res) => {
      try {
        if (query) {
          const res = await asosRequest.get(
            `/v2/list?q=${query}&=categoryId=27108&limit=24&store=US&offset=0`
          );
          console.log(res.data.products);
          setProducts(res.data.products);
        } else {
          const res = await asosRequest.get(
            category
              ? `/v2/list?categoryId=${category}&limit=24&store=US&offset=0`
              : `/v2/list/?categoryId=27108&limit=24&store=US&offset=0`
          );
          console.log(res.data.products);
          setProducts(res.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, query]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return Date.parse(a.createdAt) - Date.parse(b.createdAt);
        });
      });
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return Date.parse(b.createdAt) - Date.parse(a.createdAt);
        });
      });
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item, key) => <Product item={item} key={key} />)
        : products.length > 0 && products
            .slice(0, 10)
            .map((item, key) => <Product item={item} key={key} />)}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: grid;
  width: 98%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin-left: 60px;
  ${tablet({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}
  ${mobile({ display: "flex", flexDirection: "column" })};
`;
