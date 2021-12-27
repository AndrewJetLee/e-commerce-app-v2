import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { useState } from "react";
import { tablet } from "../responsive";
import { register } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [success, toggleSuccess] = useState(false);

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
      toggleSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {success && (
        <SuccessModal>
          <Message>
            <Top>
              <CheckCircleOutlineIcon className="checkIconOutline"/>
              <span className="title">REGISTRATION SUCCESS</span>
            </Top>
            <Bottom>
              <div className="text"><CheckCircleIcon className="checkIcon"/> Congratulations, your account has been successfully created.</div>
              <button onClick={() => {
                toggleSuccess(false);
                navigate("/login");
              }} className="continue">CONTINUE</button>
            </Bottom>
          </Message>
        </SuccessModal>
      )}
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

const SuccessModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const Message = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  line-height: 1.5; 
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  height: 60%; 
  .checkIconOutline {
    color: green; 
    font-size: 70px;
    margin-bottom: 10px; 
  }
  .title {
    font-size: 24px;
    font-weight: 500;  
  }
`
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-around;
  height: 100%; 
  .text {
    color: green;
    width: 80%; 
    background-color: #cde7cd; 
    margin-bottom: 50px; 
    padding: 15px; 
    border-radius: 3px; 
    .checkIcon {
      font-size: 16px; 
    }
  }
  .continue {
    border: solid 1px gray; 
    padding: 12px 30px; 
    border-radius: 20px; 
    color: gray; 
    font-weight: 500; 
    cursor: pointer; 
  }
`