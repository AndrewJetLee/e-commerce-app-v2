import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container item={item}>
      <img className="itemImg" src={item.img} alt="" />
      <ItemInfo>
        <span>2022 Collection</span>
        <h3 className="itemTitle">{item.title}</h3>
        <button
          onClick={() =>
            navigate(`/products/${item.category}`, {
              state: {
                categoryName: item.title,
              },
            })
          }
        >
          SHOP NOW
        </button>
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
  height: 500px;
  width: 300px;
  margin: 3px;
  .itemImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "40vh", objectPosition: "0px 10px" })};
  }
`;

const ItemInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .itemTitle {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
  }
  button {
    background-color: #bd9a58;
    color: white;
    padding: 8px 12px;
    width: 200px;
    cursor: pointer;
    transition: filter 0.167s ease-in-out;
    :hover {
    filter: brightness(90%);
  }
  }
`;
