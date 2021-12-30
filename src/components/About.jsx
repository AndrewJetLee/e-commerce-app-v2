import styled from "styled-components";
import { tablet, mobile } from "../responsive";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About = () => {
  return (
    <Container>
      <Content>
        <Title> HURRY! </Title>
        <DiscountText>NEWSLETTER AND GET DISCOUNT 25% OFF</DiscountText>
          <Description>
            Sign up for newsletter and get 10% cash back offer
          </Description>
        <InputWrapper>
            <Input placeholder="Enter your email..."/>
            <InputButton>SUBSCRIBE<ArrowForwardIcon className="arrowRightIcon"/></InputButton>
          </InputWrapper>
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 600px;
  width: 100%;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 244, 240);
  color: white;
  background-image: url("/images/home-page-fashion-newsletter-bg.jpg");
  ${mobile({ flexDirection: "column", padding: "20px", height: "400px" })};
`;

const Content = styled.div`
  width: 60%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  line-height: 2; 
  ${mobile({ width: "100%" })};
`;

const Title = styled.h1`
  flex: 1;
  font-weight: 600;
  margin-right: 30px;
  font-size: 64px; 
  ${mobile({
    flex: "column",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "28px",
    marginRight: "0",
  })};
`;

const DiscountText = styled.span`
  text-align: center; 
  background-color: black; 
  padding: 3px 16px; 
  margin-bottom: 25px; 
  ${mobile({ width: "70%",
  fontSize: "14px" })};
`

const Description = styled.div`
  font-size: 28px;
  line-height: 1.5;
  width: 50%;
  text-align: center;  
  margin-bottom: 40px; 
  ${mobile({ width: "100%" })};
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black; 
  align-items: center;

`

const Input = styled.input`
  width: 100%;
  font-size: 15px;
  padding: 12px 0;
  font-weight: 300;
  color: black;
  ::placeholder {
    color: inherit; 
  }
`;

const InputButton = styled.button`
  height: 100%; 
  display: flex;
  align-items: center; 
  .arrowRightIcon {
    font-size: 14px; 
    margin-left: 3px; 
  }
`