import styled from "styled-components";
import { useState } from "react";
import { Remove, Add, Close } from "@mui/icons-material/";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../redux/apiCalls";

const CartItem = ({item}) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
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

  const handleRemoveItem = (id) => {
    let filtered = cart.products.filter((cartItem) => id !== cartItem._id);
    let userId = user._id;
    let payload = {
      products: filtered,
      userId: user._id
    }
    console.log("redux cart:", cart, "payload: ", payload);
    // dispatch to api call for update cart
    updateCart(dispatch, payload);
  }

  return (
    <Wrapper>
      <Left>
        <Close onClick={() => handleRemoveItem(user._id)}className="closeIcon"/>
        <Image src={item.image}></Image>
      </Left>
      <Center>
        <ProductName>
          <strong>Product:</strong> {item.title}
        </ProductName>
        <ProductId>
          <strong>ID:</strong> {item._id}
        </ProductId>
        <ProductColor><strong>Color</strong>: {item.color}</ProductColor>
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
  font-size: 14px; 
`;
const Left = styled.td`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
 
  .closeIcon {
    font-size: 14px; 
    transition: color .167s ease-in-out;
    cursor: pointer; 
    :hover {
      color: red; 
    }
  }
`;
const Image = styled.img`
  width: 200px;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;  
`;
const ProductName = styled.span`
  margin: 5px 0;
`;

const ProductId = styled(ProductName)``;
const ProductSize = styled(ProductName)``;
const ProductColor = styled(ProductName)``;

const Right = styled.div`
  flex: 1.3;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-top: 10px;
`;
const Counter = styled.div`
    display: flex;
`;

const Total = styled.span`
  margin-right: 10px;
`;
