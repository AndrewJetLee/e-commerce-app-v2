import styled from "styled-components";
import { useState, useEffect } from "react";
import { Remove, Add, Close } from "@mui/icons-material/";
import { useSelector, useDispatch } from "react-redux";
import { editCart, editCount } from "../redux/apiCalls";
import { mobile, tablet } from "../responsive";


const CartItem = ({ item }) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [editedCart, setEditedCart] = useState(cart);

  useEffect(() => { 
    setEditedCart(cart);
  }, [cart])

  useEffect(() => {
    console.log(editedCart);
    if (editedCart.products.length < cart.products.length) {
      editCart(dispatch, editedCart, "delete", user.currentUser.accessToken);
    } else if (editedCart !== cart) {
      editCart(dispatch, editedCart, "update", user.currentUser.accessToken);
    }
  }, [editedCart])

  useEffect(() => {
    if (count !== item.quantity) {
      updateEditedCart()
    }
  }, [count])

  const updateEditedCart = () => {
    let payload = {
      cartId: cart.cartId,
      productId: item.productId,
      quantity: count,
      userId: user.currentUser._id,
    }
    editCount(dispatch, payload, user.currentUser.accessToken)
  }

  const handleClickCounter = (action) => {
    if (action === "add") {
      count < 10 && setCount(count + 1); 
    }
    if (action === "remove") {
      count > 0 && setCount(count - 1);
    }
  };

  const handleRemoveItem = async (productId) => {
    let filteredProducts = cart.products.filter((cartItem) => productId !== cartItem._id);
    setEditedCart({
      userId: user.currentUser._id, 
      products: filteredProducts,
      cartId: cart.cartId
    })
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
        <Total>{`$${(item.price * count).toFixed(2)}`}</Total>
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
  position: relative; 
  .closeIcon {
    font-size: 14px;
    transition: color 0.167s ease-in-out;
    cursor: pointer;
    :hover {
      color: red;
    }
    ${mobile({
    position: "absolute",
    top: "0px",
    right: "0px",
  })}
  }
`;
const Image = styled.img`
  width: 150px;
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
    marginLeft: "0",
    fontSize: "16px",
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
