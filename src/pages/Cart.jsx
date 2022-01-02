import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethods";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const makeStripeRequest = async () => {
    try {
      const res = await userRequest.post("/checkout/payment", {
        tokenId: stripeToken.id,
        amount: cart.total * 100,
      });
      navigate("/success", { state: { stripeData: res.data, products: cart } });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    stripeToken && makeStripeRequest();
  }, [stripeToken]);

  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        {!cart.products.length ? (
          <div>Gigity</div>
        ) : (
          <Content>
            <Top>
              <Title>CART</Title>
              <Options>
                <LeftButton onClick={() => navigate("/products/mens")}>
                  Continue Shopping
                </LeftButton>
                <CenterLinks>
                  <CenterLink>Shopping Bag</CenterLink>
                  <CenterLink>Your Wishlist</CenterLink>
                </CenterLinks>
                <StripeCheckout
                  name="Shop"
                  image="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
                  billingAddress
                  shippingAddress
                  description={`You total is $${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <RightButton>Checkout Now</RightButton>
                </StripeCheckout>
              </Options>
            </Top>
            <Bottom>
              <Items>
                <HorizontalSeparator></HorizontalSeparator>
                {cart.products.map((item) => (
                  <CartItem item={item} />
                ))}
              </Items>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>${cart.total}</SummaryItemPrice>
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
                  <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                  name="Shop"
                  image="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
                  billingAddress
                  shippingAddress
                  description={`You total is $${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <CheckoutButton>CHECKOUT NOW</CheckoutButton>
                </StripeCheckout>
              </Summary>
            </Bottom>
          </Content>
        )}

        <Footer />
      </Container>
    </>
  );
};

export default Cart;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh; 
`;

const Content = styled.main`
  width: 70%;
  height: 100%;
  padding: 20px;
`;

const Top = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
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
`;

const HorizontalSeparator = styled.span`
  display: inline-block;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  margin-top: 10px;
  position: absolute;
`;

const Items = styled.div`
  flex: 2;
  position: relative;
`;

const Summary = styled.div`
  flex: 1;
  max-width: 390px;
  height: 45vh;
  background-color: rgb(247, 247, 247);
  border-top: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const SummaryTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  width: 100%;
`;

const SummaryItem = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${({ type }) => type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled(SummaryItemText)``;

const CheckoutButton = styled(RightButton)`
  width: 100%;
  margin-top: 40px;
  height: 45px;
`;
