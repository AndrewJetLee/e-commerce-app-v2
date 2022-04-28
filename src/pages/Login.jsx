import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Input from "../components/Input";
import Footer from "../components/Footer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { tablet } from "../responsive";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Form>
          <Title>LOGIN</Title>
          <Input setValue={setUsername} placeholder="Username" type="text" />
          <Input
            setValue={setPassword}
            placeholder="Password"
            type="password"
          />
          <Submit onClick={handleClick} disabled={isFetching}>
            SIGN IN
          </Submit>
          {error && (
            <Error>
              Something went wrong. Please confirm your information and try
              again.{" "}
            </Error>
          )}
        </Form>
        <Links>
          <LinkItem>Forgot your password?</LinkItem>
          <LinkItem onClick={() => navigate("/register")}>
            Create account
          </LinkItem>
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
  ${tablet({
    width: "100%",
  })}
`;

const Title = styled.span`
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 300;
`;

const Submit = styled.button`
  background-color: #0e185f;
  color: white;
  width: 80%;
  height: 50px;
  font-weight: 500;
  border-radius: 5px;
  font-size: 16px;
  transition: opacity 0.167s ease-in-out;
  cursor: pointer;
  :disabled {
    color: #0e185f;
    cursor: not-allowed;
  }
  :hover {
    opacity: 0.9;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkItem = styled.a`
  margin: 10px 0;
  cursor: pointer;
  color: #0e185f;
  :hover {
    text-decoration: underline;
  }
`;

const Error = styled.span`
  color: red;
  margin-top: 20px;
`;
