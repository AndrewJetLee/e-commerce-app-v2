import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { primaryColor } from "../responsive";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Testimonials = () => {
  return (
    <Container>
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
            <Title>CUSTOMER TESTIMONIALS</Title>
            <Wrapper>
              <CustomerImage></CustomerImage>
              <CustomerName>JOHN DOE</CustomerName>
              <CustomerTitle>Lorem ipsum</CustomerTitle>
              <CustomerReview>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptat.
              </CustomerReview>
            </Wrapper>
          </Testimonial>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Testimonials;

const Container = styled.section`
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  .mySwiper {
    display: flex;
    width: 85%;
    justify-content: center;
  }
`;

const Title = styled.h1`
`

const Testimonial = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CustomerImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
`;

const CustomerName = styled.h3``;

const CustomerTitle = styled.span``;

const CustomerReview = styled.p``;
