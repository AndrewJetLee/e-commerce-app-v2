import styled from "styled-components";
import { ArrowRight, ArrowLeft } from "@mui/icons-material/";

const Carousel = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeft />
      </Arrow>
      <Slides>
        <Slide>
          <SlideImageContainer>
            <SlideImage
              src="http://placekitten.com/800/800"
              alt=""
            ></SlideImage>
            <SlideInfoContainer></SlideInfoContainer>
          </SlideImageContainer>
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
  margin-top: 30px; 
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
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
  cursor: pointer;
`;

const Slides = styled.div`
  height: 100%;
  width: 100%;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const SlideImageContainer = styled.div`
  flex: 1;
  display: flex;
  /* align-items: center; */
  
`;

const SlideImage = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
`;

const SlideInfoContainer = styled.div`
  background-color: blue;
  position: absolute; 
`;
