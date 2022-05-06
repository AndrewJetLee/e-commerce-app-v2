import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { primaryColor } from "../responsive";
import SeparatorButton from "./SeparatorButton";
import { TestimonialItems } from "../dummyData";
import Fade from "react-reveal/Fade";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Testimonials = () => {
  return (
    <Fade>
      <Container>
        <SectionTitle>CUSTOMER TESTIMONIALS</SectionTitle>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {TestimonialItems.map((item, i) => (
            <SwiperSlide>
              <Testimonial>
                <Wrapper>
                  <CustomerImage src={item.image} />
                  <CustomerName>{item.name}</CustomerName>
                  <CustomerTitle>{item.title}</CustomerTitle>
                  <CustomerReview>{item.review}</CustomerReview>
                </Wrapper>
              </Testimonial>
            </SwiperSlide>
          ))}
        </Swiper>
        <SeparatorButton></SeparatorButton>
      </Container>
    </Fade>
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

export const SectionTitle = styled.h1`
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) => props.bg && props.bg};
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
  width: 900px;
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
