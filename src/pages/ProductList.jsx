import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { asosRequest } from "../requestMethods";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Slider from "../components/Slider";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [filter, setFilter] = useState({});
  const [sex, setSex] = useState("");
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
              <select onChange={handleFilter} name="category" id="category">
                <option hidden selected>
                  Category
                </option>
                <option value="13500">New Arrivals</option>
                <option value="26090">Activewear</option>
                <option value="50062">Accessories</option>
              </select>
            </Filter>
            {/* <Filter>
              <div onChange={handleFilter} name="color" id="color">
                Price Range
              </div>
              <Slider/>
            </Filter> */}
            <Filter>
              <select onChange={handleFilter} name="sex" id="sex">
                <option hidden selected>
                  Sex
                </option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </Filter>
            <Filter>
              <select onChange={handleSort} name="sort" id="sort">
                <option hidden selected>
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
          sex={sex}
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
