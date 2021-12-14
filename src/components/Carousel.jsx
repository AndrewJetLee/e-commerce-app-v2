import styled from "styled-components";
import { ArrowRight, ArrowLeft } from "@mui/icons-material/";

const Carousel = () => {

  const handleClick = (direction) => {

  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Slides>
        <Slide>
          <SlideImageContainer>
            <SlideImage src="/images/slide-image-1.jpg" alt=""></SlideImage>
          </SlideImageContainer>
          <SlideInfoContainer>
            <SlideInfoTitle>STEP UP YOUR DRIP</SlideInfoTitle>
            <SlideInfoDescription>
              You've never seen prices this low! Get 85% off all this drip
            </SlideInfoDescription>
            <SlideInfoButton>Shop Now</SlideInfoButton>
          </SlideInfoContainer>
        </Slide>
        <Slide>
          <SlideImageContainer>
            <SlideImage src="/images/slide-image-1.jpg" alt=""></SlideImage>
          </SlideImageContainer>
          <SlideInfoContainer>
            <SlideInfoTitle>STEP UP YOUR DRIP</SlideInfoTitle>
            <SlideInfoDescription>
              You've never seen prices this low! Get 85% off all this drip
            </SlideInfoDescription>
            <SlideInfoButton>Shop Now</SlideInfoButton>
          </SlideInfoContainer>
        </Slide>
        <Slide>
          <SlideImageContainer>
            <SlideImage src="/images/slide-image-1.jpg" alt=""></SlideImage>
          </SlideImageContainer>
          <SlideInfoContainer>
            <SlideInfoTitle>STEP UP YOUR DRIP</SlideInfoTitle>
            <SlideInfoDescription>
              You've never seen prices this low! Get 85% off all this drip
            </SlideInfoDescription>
            <SlideInfoButton>Shop Now</SlideInfoButton>
          </SlideInfoContainer>
        </Slide>
      </Slides>
      <Arrow direction="right">
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  height: calc(100vh - 115px);
  width: 100%;
  position: relative;
  overflow: hidden; 
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
  z-index: 5; 
  cursor: pointer;
  opacity: .7; 
`;

const Slides = styled.div`
  height: 100%;
  display: flex; 
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
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
`;
