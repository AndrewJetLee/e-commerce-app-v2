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
  height: 90vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
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
  opacity: 0.7;
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
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
`;

const SlideImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100vw;
`;

const SlideImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const SlideInfoContainer = styled.div`
  height: 50%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  margin-left: auto;
  margin-right: auto;
  color: white;
`;

const SlideInfoTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
`;

const SlideInfoDescription = styled.span`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const SlideInfoButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer; 
`;
