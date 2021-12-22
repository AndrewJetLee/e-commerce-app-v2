import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value; 
    setFilter({
      ...filter, 
      [e.target.name]: value,
    })
  }

  const handleSort = (e) => {
    const value = e.target.value; 
    setSort(value);
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Title>{cat}</Title>
        <Top>
          <FilterContainer>
            <label>Filter products: </label>
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
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </Filter>
          </FilterContainer>
          <SortContainer>
            <label>Sort products: </label>
            <Sort>
              <select onChange={handleSort} name="sort" id="sort">
                <option value="newest" selected>
                  Newest
                </option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price(asc)</option>
                <option value="desc">Price(desc)</option>
              </select>
            </Sort>
          </SortContainer>
        </Top>
        <Products category={cat} filters={filter} sort={sort}/>
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
  text-transform: uppercase; 
  ${mobile({ textAlign: "center"})};
`;
const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 15px;
  label {
    margin-right: 10px;
  }
  ${mobile({ justifyContent: "center", margin: "0" })};
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "5px" })};
  select {
    text-align: center;
    border-color: #949393;
    padding: 10px;
  }
`;

const SortContainer = styled(FilterContainer)`
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", marginTop: 0 })};
`;

const Sort = styled(Filter)``;
