import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/products/${item.category}`)}>
      <img className="itemImg" src={item.img} alt="" />
      <ItemInfo>
        <h3 className="itemTitle">{item.title}</h3>
      </ItemInfo>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  position: relative;
  cursor: pointer; 
  .itemImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "50vh" })};
  }
`;

const ItemInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .itemTitle {
    margin: 16px 12px;
    font-size: 22px;
  }
  .itemDesc {
    margin: 0 12px;
  }
`;
