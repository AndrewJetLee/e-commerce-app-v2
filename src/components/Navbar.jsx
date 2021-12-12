import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined, Search, ChatOutlined } from "@mui/icons-material/";

const Navbar = () => {
  return (
    <Container>
      <Content>
        <Left>
          <Logo>AJL.</Logo>
        </Left>
        <Center>
          <SearchBar>
            <Search className="navbarSearchIcon" />
            <input type="text" placeholder="Search products and more" />
          </SearchBar>
        </Center>
        <Right>
          <Contact>CONTACT <ChatOutlined className="navbarContactIcon"/></Contact>
          <Register>REGISTER</Register>
          <SignIn>SIGN IN</SignIn>

          <VerticalSeparator></VerticalSeparator>
          <Cart>
            CART
            <ShoppingCartOutlined className="navbarCartIcon" />
            <span>3</span>
          </Cart>
        </Right>
      </Content>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 80px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 40px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h2`
  font-size: 36px;
  cursor: pointer;
`;
const SearchBar = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 50px;
  margin-left: 20px;
  align-items: center;
  padding: 4px;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  margin-right: auto;
  .navbarSearchIcon {
    margin-left: 8px;
    font-size: 25px;
  }
  input {
    width: 100%;
    border: none;
    padding: 4px;
    font-size: 16px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const Contact = styled.div`
    font-weight: 500; 
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 15px; 
    display: flex;
    align-items: center; 
    padding: 5px;
    .navbarContactIcon {
    margin-left: 6px;
  }
`;

const Register = styled.button`
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`;

const SignIn = styled(Register)``;

const Cart = styled(Register)`
  display: flex;
  align-items: center;
  margin-left: 15px;
  position: relative;
  .navbarCartIcon {
    margin-left: 4px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    background-color: royalblue;
    right: 0;
    top: 0;
    color: white;
    font-size: 10px;
  }
`;

const VerticalSeparator = styled.span`
  width: 1px;
  height: 32px;
  background: #2b2b29;
`;
