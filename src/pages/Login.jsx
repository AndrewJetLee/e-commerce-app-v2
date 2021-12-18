import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Input from "../components/Input";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Form>
          <Title>LOGIN</Title>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
          <Submit>SIGN IN</Submit>
        </Form>
        <Links>
            <LinkItem>Forgot your password?</LinkItem>
            <LinkItem>Create account</LinkItem>
        </Links>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  height: 70vh; 
`;

const Form = styled.form`
    width: 60%;
    max-width: 650px; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 10px; 
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

const Links = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
`
const LinkItem = styled.a`
    margin: 10px 0; 
    cursor: pointer; 
    color: darkblue; 
`
