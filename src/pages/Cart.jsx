import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Top>
          <Title>YOUR CART</Title>
          <Options>
            <LeftButton>Continue Shopping</LeftButton>
            <CenterLinks>
              <CenterLink>Shopping Bag</CenterLink>
              <CenterLink>Your Wishlist</CenterLink>
            </CenterLinks>
            <RightButton>Checkout Now</RightButton>
          </Options>
        </Top>
        <Bottom>
          <Items>
            <CartItem />
            <CartItem />
            <CartItem />
          </Items>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimate Shipping</SummaryItemText>
              <SummaryItemPrice>$6.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$6.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80.0</SummaryItemPrice>
            </SummaryItem>
            <CheckoutButton>
                CHECKOUT NOW
            </CheckoutButton>
          </Summary>
        </Bottom>
      </Content>
      <Footer />
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Top = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftButton = styled.button`
  padding: 8px;
  border: solid 1px black;
`;
const CenterLinks = styled.div``;
const CenterLink = styled.a`
  text-decoration: underline;
  margin-right: 5px;
`;
const RightButton = styled.button`
  padding: 8px;
  background-color: black;
  color: white;
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 20px; 
`;

const Items = styled.div`
  flex: 2;
`;

const Summary = styled.div`
  flex: 1;
  max-width: 390px; 
  height: 45vh; 
  border: solid 1px lightgray; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const SummaryTitle = styled.h2`
    font-weight: 400;
    font-size: 32px;
    width: 100%;   
`

const SummaryItem = styled.div`
    margin-top: 30px; 
    width: 100%; 
    display: flex;
    justify-content: space-between;
    font-size: ${({type}) => type === "total" && "24px"};
`

const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled(SummaryItemText)``

const CheckoutButton = styled(RightButton)`
    width: 100%; 
    margin-top: 40px; 
    height: 45px; 

`