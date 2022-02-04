import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Success = () => {
  const location = useLocation();
  const data = location.state?.stripeData;
  const cart = location.state?.cart;
  console.log(data, cart);
  console.log(location);
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Content>
          <CheckCircleOutlineIcon className="checkIcon" />
          <OrderHeader>YOUR ORDER HAS BEEN RECEIVED</OrderHeader>
          <OrderInfo>
            <OrderInfoHeader>THANK YOU FOR YOUR PURCHASE!</OrderInfoHeader>
            <OrderNumber>Your order number is: 123123</OrderNumber>
            <OrderText>
              You will receive an order confirmation email with details of your
              order.
            </OrderText>
          </OrderInfo>
          <ContinueShoppingButton>CONTINUE SHOPPING</ContinueShoppingButton>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Success;

const Container = styled.div`
  height: calc(100vh - 364px - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  .checkIcon {
    font-size: 100px;
    color: green;
  }
`;

const OrderHeader = styled.h1`
    margin-top: 10px;
`;

const OrderInfo = styled.section`
  display: flex;
  height: 20%;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  justify-content: space-around;
`;

const OrderInfoHeader = styled.h2``;
const OrderNumber = styled.span``;
const OrderText = styled.p``;
const ContinueShoppingButton = styled.button`
    margin-top: 20px;
    background-color: blue;
    color: white;
    padding: 8px 16px;
    border-radius: 2px;
`;
