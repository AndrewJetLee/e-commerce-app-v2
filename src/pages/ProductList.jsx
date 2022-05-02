import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { asosRequest } from "../requestMethods";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const ProductList = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const sortRef = useRef(sort);
  const [categoryId, setCategoryId] = useState(category);

  useEffect(() => {
    setCategoryId(category);
  }, [category])

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <Container>
      <Navbar hidden={ q && "true" } />
      <Content>
        <Top>
          <FilterContainer>
            <Filter>
              <select onChange={handleFilter} name="color" id="color">
                <option hidden defaultValue>
                  Color
                </option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="gray">Gray</option>
                <option value="blue">Blue</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleFilter} name="category" id="category">
                <option hidden defaultValue>
                  Category
                </option>
                <option value="50060">Best Sellers</option>
                <option value="26090">Activewear</option>
                <option value="50062">Accessories</option>
                <option value="27110">Men's Collection</option>
                <option value="27108">Women's Collection</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleSort} name="sort" id="sort">
                <option hidden defaultValue>
                  Sort
                </option>
                <option value="freshness">Newest</option>
                <option value="priceasc">Price(asc)</option>
                <option value="pricedesc">Price(desc)</option>
              </select>
            </Filter>
          </FilterContainer>
        </Top>
        <Products
          sort={sort}
          sortRef={sortRef}
          query={q}
          category={category}
          filter={filter}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />
      </Content>
      <Footer />
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 100px;
  ${mobile({ flexDirection: "column" })};
`;


const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  label {
    margin-right: 10px;
  }
  ${mobile({ justifyContent: "center", margin: "0" })};
`;

const Filter = styled.div`
  width: 200px;
  margin: 20px;
  max-height: 100%;
  min-height: 18px;
  ${mobile({ margin: "5px" })};
  select {
    outline: 0;
    width: 100%;
    height: 100%;
    color: black;
    cursor: pointer;
    position: relative;
    display: block;
    width: 15em;
    overflow: hidden;
    border-radius: 0.25em;
    padding-bottom: 10px;
    text-align: center;
    border-color: lightgrey;
    padding: 10px;
    width: 100%;
    border-left: none;
    border-right: none;
  }
`;
