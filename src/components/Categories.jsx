import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { CategoriesItems } from "../dummyData";

const Categories = () => {
  return (
    <Container>
      <Content>
        <Items>
          {CategoriesItems.map((item) => (
            <CategoryItem item={item} />
          ))}
        </Items>
      </Content>
    </Container>
  );
};

export default Categories;

const Container = styled.div``;
const Content = styled.div``;

const Items = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  justify-content: center;
`;
