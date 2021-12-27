import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Input from "../components/Input";
import { useState } from "react";

const Register = () => {
  
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Content>
        <Form>
          <Title>CREATE ACCOUNT</Title>
          <Input placeholder="First Name"/>
          <Input placeholder="Last Name"/>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
          <Submit>CREATE</Submit>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Register;

const Container = styled.div``;



const Content = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  height: 85vh; 
`;

const Form = styled.form`
    width: 60%;
    height: 60%; 
    max-width: 650px; 
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

const Title = styled.span`
    font-size: 36px; 
    text-align: center; 
    margin-bottom: 30px; 
    font-weight: 300; 
`;

const Submit = styled.button`
    background-color: darkblue; 
    color: white; 
    width: 80%; 
    height: 50px;
    font-weight: 500; 
    border-radius: 5px; 
    font-size: 16px; 
`;

