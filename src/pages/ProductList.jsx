import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { asosRequest } from "../requestMethods";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductList = () => {
  let { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("freshness");
  const [list, setList] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await asosRequest.get(
      `/v2/list?categoryId=${category}&limit=20&store=US&offset=0`
    );
    setCategoryTitle(res.data.categoryName);
    setList(res.data.products);
  };

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
        <Title>{category ? categoryTitle : `Showing results for: ${q}`}</Title>
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
                <option value="freshness" selected>
                  Newest
                </option>
                <option value="priceasc">Price(asc)</option>
                <option value="pricedesc">Price(desc)</option>
              </select>
            </Sort>
          </SortContainer>
        </Top>
        <Products
          list={list}
          query={q}
          category={category}
          filters={filter}
          sort={sort}
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
  text-transform: uppercase;
  ${mobile({ textAlign: "center" })};
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
