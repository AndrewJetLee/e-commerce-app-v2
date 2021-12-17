import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Title>Men's Style</Title>
        <Top>
          <FilterContainer>
            <label for="category">Filter products: </label>
            <Filter>
              <select name="category" id="category">
                <option hidden selected>
                  Category
                </option>
                <option value="accessories">Accessories</option>
                <option value="essentials">Essentials</option>
                <option value="streetwear">Streetwear</option>
              </select>
            </Filter>
            <Filter>
              <select name="size" id="size">
                <option hidden selected>
                  Size
                </option>
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
                <option value="xl">X-Large</option>
              </select>
            </Filter>
          </FilterContainer>
          <SortContainer>
            <label for="category">Sort products: </label>
            <Sort>
              <select name="price" id="price">
                <option hidden selected>
                  Price
                </option>
                <option value="high-to-low">High to low</option>
                <option value="low-to-high">Low to High</option>
              </select>
            </Sort>
            <Sort>
              <select name="time" id="time">
                <option value="newest" selected>
                  Newest
                </option>
                <option value="oldest">Oldest</option>
              </select>
            </Sort>
          </SortContainer>
        </Top>
        <Products />
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
