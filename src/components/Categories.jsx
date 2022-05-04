import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { CategoriesItemsRowOne, CategoriesItemsRowTwo } from "../dummyData";
import { mobile } from "../responsive";

const Categories = () => {
  return (
    <Container>
      <Content>
        <Items>
          {CategoriesItemsRowOne.map((item, key) => (
            <CategoryItem item={item} key={key} />
          ))}
        </Items>
        <Items>
          {CategoriesItemsRowTwo.map((item, key) => (
            <CategoryItem item={item} key={key} />
          ))}
        </Items>
      </Content>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  background-color: ${(props) => props.theme.colors.extra};
`;
const Content = styled.div`
  width: 85%;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  ${mobile({ flexDirection: "column", marginTop: 0 })};
`;
