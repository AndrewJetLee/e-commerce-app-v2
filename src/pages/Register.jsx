import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { useState } from "react";
import { tablet } from "../responsive";
import { register } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Register = () => {
  // grab register status from userSlice state 
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [newUser, setNewUser] = useState(null);

  const handleChange = (e) => {
    let value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(dispatch, values);
      console.log(res);
      // after register is completed, have a modal show that says register was successful
      setNewUser(res.payload);
    
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Form>
          <Title>CREATE ACCOUNT</Title>
          <InputWrapper>
            <input
              type="text"
              placeholder="First Name"
              value={values.firstName}
              name="firstName"
              onChange={handleChange}
              setValues={setValues}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="Last Name"
              value={values.lastName}
              name="lastName"
              onChange={handleChange}
              setValues={setValues}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="email"
              placeholder="Email"
              value={values.email}
              name="email"
              onChange={handleChange}
              setValues={setValues}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="Username"
              value={values.username}
              name="username"
              onChange={handleChange}
              setValues={setValues}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="password"
              placeholder="Password"
              value={values.password}
              name="password"
              onChange={handleChange}
              setValues={setValues}
            />
          </InputWrapper>
         
          <Submit onClick={handleSubmit}>CREATE</Submit>
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
  border: solid;
`;

const Form = styled.form`
  width: 60%;
  height: 60%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${tablet({
    width: "100vw",
  })}
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

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  input {
    background-color: #f0f0f0;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: 16px;
    padding: 14px;
    ::placeholder {
      color: #aaaaaa;
    }
  }
`;
