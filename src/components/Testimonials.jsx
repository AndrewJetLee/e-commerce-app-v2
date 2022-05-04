import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { primaryColor } from "../responsive";
import SeparatorButton from "./SeparatorButton";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Testimonials = () => {
  return (
    <Container>
      <Title>CUSTOMER TESTIMONIALS</Title>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Testimonial>
            <Wrapper>
              <CustomerImage src="/images/testimonial-image-3.jpg"/>
              <CustomerName>JOHN DOE</CustomerName>
              <CustomerTitle>Lorem ipsum</CustomerTitle>
              <CustomerReview>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CustomerReview>
            </Wrapper>
          </Testimonial>
        </SwiperSlide>
        
      </Swiper>
      <SeparatorButton></SeparatorButton>
    </Container>
  );
};

export default Testimonials;

const Container = styled.section`
  padding-top: 40px;
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .mySwiper {
    display: flex;
    width: 85%;
    justify-content: center;
    .swiper-button-prev {
      color: ${primaryColor};
      opacity: 0.8;
    }

    .swiper-button-next {
      color: ${primaryColor};
      opacity: 0.8;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 500;
`;

const Testimonial = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 800px;
  height: 350px;
  border: 1px solid lightgray;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomerImage = styled.img`
  object-fit: cover;
  width: 130px;
  height: 130px;
  position: absolute;
  border: 1px solid #f4f4f4;
  top: 10px;
  border-radius: 50%;
`;

const CustomerName = styled.h3`
  margin-top: 80px;
  font-weight: 500;
  font-size: 25px;
`;

const CustomerTitle = styled.span`
  font-weight: 500;
  color: gray;
`;

const CustomerReview = styled.p`
  margin-top: 10px;
  padding: 20px;
  color: gray;
  text-align: center;
  font-size: 16px;
`;
