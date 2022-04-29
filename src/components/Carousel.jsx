import styled from "styled-components";
import { ArrowRight, ArrowLeft } from "@mui/icons-material/";
import { carouselItems } from "../dummyData.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Carousel = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      if (slideIndex > 0) {
        setSlideIndex(slideIndex - 1)
      } 
      if (slideIndex === 0) {
        setSlideIndex(2);
      }
    }

    if (direction === "right") {
      if (slideIndex === 2) {
        setSlideIndex(0);
      }
      if (slideIndex < 2) {
        setSlideIndex(slideIndex + 1);
      }
      
    } 
  };

  const handleClickShop = (id) => {
    if (id === 1) {
      navigate("/products/streetwear")
    }
    if (id === 2) {
      navigate("/products/womens")
    }
    if (id === 3) {
      navigate("/products/accessories")
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Slides slideIndex={slideIndex}>
        {carouselItems.map((item, key) => (
          <Slide key={key}>
            <SlideImageContainer>
              <SlideImage src={item.img} alt=""></SlideImage>
            </SlideImageContainer>
            <SlideInfoContainer>
              <SlideInfoCollection>2022 NEW COLLECTION</SlideInfoCollection>
              <SlideInfoTitle>{item.title}</SlideInfoTitle>
              <SlideInfoDescription>{item.desc}</SlideInfoDescription>
              <SlideInfoButton onClick={() => handleClickShop(item.id)}>Shop Now</SlideInfoButton>
            </SlideInfoContainer>
          </Slide>
        ))}
      </Slides>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  height: 81vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #F4F4F4;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  z-index: 100;
  cursor: pointer;
  opacity: 0.3;
`;

const Slides = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
  transition-property: transform;
  transition-duration: .5s; 
  transition-timing-function: ease-in-out;
`;

const Slide = styled.div`
  height: 100%;
  min-width: 100vw;
  display: flex;
  flex: 1;
  position: relative;
  background-color: #F4F4F4;
`;

const SlideImageContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 200px;
  min-width: 800px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const SlideInfoTitle = styled.h1`
  font-size: 70px;
  margin-bottom: 30px;
  font-weight: 600;
  width: 80%;
  line-height: 1.1;
  color: ${props => props.theme.colors.fc};
`;

const SlideInfoDescription = styled.span`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.fclight};
`;

const SlideInfoCollection = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.fclight};
`

const SlideInfoButton = styled.button`
  height: 40px;
  width: 200px;
  background-color:  ${props => props.theme.colors.fc};
  color: white;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase; 
  cursor: pointer; 
`;
