import styled from "styled-components";
import { useState } from "react";
import { Remove, Add, Close, ConstructionSharp } from "@mui/icons-material/";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartSlice";
import { mobile, tablet } from "../responsive";

const CartItem = ({ cart, item }) => {
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
    let payload = {
      price,
      quantity: count,
    };
    console.log("redux cart:", cart, "payload: ", payload, "item: ", item);
    dispatch(removeProduct(payload));
  };

  return (
    <Wrapper>
      <Left>
        <Close
          onClick={() => handleRemoveItem(item._id)}
          className="closeIcon"
        />
        <Image src={item.image}></Image>
      </Left>
      <Center>
        <ProductName>
          <strong>Product:</strong> {item.title}
        </ProductName>
        <ProductId>
          <strong>ID:</strong> {item._id}
        </ProductId>
        <ProductColor>
          <strong>Color</strong>: {item.color}
        </ProductColor>
        <ProductSize>
          <strong>Size:</strong> {item.size}
        </ProductSize>
      </Center>
      <Right>
        <Quantity>
          <Counter>{count}</Counter>
          <AddRemoveWrapper>
            <AddWrapper onClick={() => handleClickCounter("add")}>
              <Add className="addIcon icon" />
            </AddWrapper>
            <RemoveWrapper onClick={() => handleClickCounter("remove")}>
              <Remove className="removeIcon icon" />
            </RemoveWrapper>
          </AddRemoveWrapper>
        </Quantity>
        <Total>{`$${item.price * count}.00`}</Total>
      </Right>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  border-bottom: solid 1px lightgray;
  font-size: 14px;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  margin-right: 20px;
`;

const AddRemoveWrapper = styled.div`
  display: flex
  flex-direction: column;
  height: 100%; 
  .icon {
    font-size: 14px; 
    
  }
`;

const AddWrapper = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-right: none;
  border-top: none;
  cursor: pointer;
`;

const RemoveWrapper = styled(AddWrapper)`
  border-left: 1px solid lightgrey;
  border-bottom: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .closeIcon {
    font-size: 14px;
    transition: color 0.167s ease-in-out;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  ${mobile({
    width: "90vw"
  })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  font-size: 13px;
  ${mobile({
    marginLeft: "0"
  })}
`;
const ProductName = styled.span`
  margin: 5px 0;
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
  })}
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
  ${mobile({
    marginBottom: "15px",
  })}
`;
const Counter = styled.div`
  height: 35px;
  width: 45px;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;


const Total = styled.span`
  margin-right: 10px;
  ${mobile({
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginRight: "0"
  })}
`;
