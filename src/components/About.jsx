import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Title> Made for the Modern American</Title>
      <Info>
        <Description>
          We blend bussin, fashion forward pieces including elevated basics
          with streetwear detailing. Since our inception, our aim has been to
          provide size inclusive fashion basics for the modern American. We seek
          to be an environmentally and socially responsible company; as such we
          work closely with our suppliers to ensure ethical conditions for
          workers. We are continually working towards providing the best
          clothing and accessories, with the least environmental and social harm
          possible.
        </Description>
        <AboutUs>ABOUT US</AboutUs>
      </Info>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: auto; 
  width: 100%;
  padding: 80px;
  display: flex;
  background-color: rgb(247, 244, 240);
  color: rgb(51, 51, 51);
`;
const Title = styled.h1`
    flex: 1;
    font-weight: 400; 
    margin-right: 30px; 
`;

const Info = styled.div`
  display: flex;
  flex-direction: column; 
  flex: 2; 
`;
const Description = styled.div`
  font-size: 14px; 
  line-height: 1.5; 
`;

const AboutUs = styled.button`
    border: 1px solid black;
    width: 200px;
    font-size: 15px;
    padding: 12px 18px;   
    margin-top: 30px; 
    font-weight: 300; 
    color: rgb(51, 51, 51);
`;
