import { Container } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { Remove, Add } from "@mui/icons-material/";

const CartItem = ({item}) => {
  const [count, setCount] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);

  const handleClickCounter = (action) => {
    if (action === "add") {
      count < 10 && setCount(count + 1);
    }
    if (action === "remove") {
      count > 0 && setCount(count - 1);
    }
  };

  return (
    <Wrapper>
      <Left>
        <Image src={item.image}></Image>
      </Left>
      <Center>
        <ProductName>
          <strong>Product:</strong> {item.title}
        </ProductName>
        <ProductId>
          <strong>ID:</strong> {item._id}
        </ProductId>
        <ProductColor>{item.color}</ProductColor>
        <ProductSize>
          <strong>Size:</strong> {item.size}
        </ProductSize>
      </Center>
      <Right>
        <Counter>
          <Remove
            className="removeIcon icon"
            onClick={() => handleClickCounter("remove")}
          />
          {count}
          <Add
            className="addIcon icon"
            onClick={() => handleClickCounter("add")}
          />
        </Counter>
        <Total>{`$${price * count}.00`}</Total>
      </Right>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  border-bottom: solid 1px lightgray;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 200px;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const ProductName = styled.span`
  margin: 10px 0;
`;

const ProductId = styled(ProductName)``;
const ProductSize = styled(ProductName)``;
const ProductColor = styled(ProductName)``;

const Right = styled.div`
  flex: 1.3;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 18px;
`;
const Counter = styled.div`
    display: flex;
`;

const Total = styled.span`
  margin-right: 10px;
`;
