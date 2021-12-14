import styled from "styled-components";

const CategoryItem = () => {
  return (
    <Container>
      <img className="itemImg" src="http://placekitten.com/g/200/300" alt="" />
      <h3 className="itemTitle">Kitty</h3>
      <span className="itemDesc">Cutie</span>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 400px;
  min-width: 300px;
  border: solid;
  margin: 30px;
  background-color: white;
  .itemImg {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  .itemTitle {
    margin: 16px 12px;
    font-size: 22px;
  }
  .itemDesc {
    margin: 0 12px;
  }
`;
