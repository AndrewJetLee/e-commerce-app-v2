import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { asosRequest } from "../requestMethods";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();
  console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const sortRef = useRef(sort);

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
      <Navbar />
      <Announcement />
      <Content>
        <Title>
          {category ? location.state.categoryName : `Showing results for: ${q}`}
        </Title>
        <Top>
          <FilterContainer>
            <Filter>
              <select onChange={handleFilter} name="color" id="color">
                <option hidden selected>
                  Color
                </option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="cream">Cream</option>
                <option value="green">Green</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleFilter} name="size" id="size">
                <option hidden selected>
                  Size
                </option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleFilter} name="color" id="color">
                <option hidden selected>
                  Category
                </option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="cream">Cream</option>
                <option value="green">Green</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleFilter} name="color" id="color">
                <option hidden selected>
                  Price Range
                </option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="cream">Cream</option>
                <option value="green">Green</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleFilter} name="color" id="color">
                <option hidden selected>
                  Sex
                </option>
                <option value="white">Men</option>
                <option value="white">Women</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleSort} name="sort" id="sort">
                <option hidden selected>
                  Sort
                </option>
                <option value="freshness">
                  Newest
                </option>
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
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 30px;
  ${mobile({ flexDirection: "column", marginTop: 0 })};
`;

const Title = styled.h1`
  padding: 30px 20px;
  padding-bottom: 15px;
  text-transform: uppercase;

  text-align: center;
  ${mobile({ textAlign: "center" })};
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
    text-align: center;
    border-color: lightgrey;
    padding: 10px;
    width: 100%;
    border-left: none; 
    border-right: none;
  }
`;
