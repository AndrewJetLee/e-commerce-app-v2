import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.stripeData;
  const cart = location.state?.cart;
  return (
    <>
      <Navbar hidden="true"/>
      <Container>
        <Content>
          <CheckCircleOutlineIcon className="checkIcon" />
          <OrderHeader>YOUR ORDER HAS BEEN RECEIVED</OrderHeader>
          <OrderInfo>
            <OrderInfoHeader>THANK YOU FOR YOUR PURCHASE!</OrderInfoHeader>
            <OrderNumber>Your order ID is: {data.id}</OrderNumber>
            <OrderText>
              You will receive an order confirmation email with details of your
              order.
            </OrderText>
          </OrderInfo>
          <ContinueShoppingButton onClick={() => {
              navigate("/")
          }}>CONTINUE SHOPPING</ContinueShoppingButton>
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
    background-color: black;
    color: white;
    padding: 8px 16px;
    border-radius: 2px;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.167s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
`;
