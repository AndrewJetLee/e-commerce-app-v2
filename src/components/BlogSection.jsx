import styled from "styled-components";
import { BlogItems } from "../dummyData";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { primaryColor } from "../responsive";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const BlogSection = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {BlogItems.map((item, i) => (
          <SwiperSlide>
            <BlogItem>
              <Top>
                <BlogImage src={item.image} alt="" />
              </Top>
              <Middle>
                <Author>
                  <PersonOutlinedIcon className="user icon" />
                  {item.author}
                </Author>
                <Comments>
                  <ChatOutlinedIcon className="comment icon" />
                  {item.comments}
                </Comments>
              </Middle>
              <Bottom>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <ReadMore>
                  READ MORE <ChevronRightOutlinedIcon />
                </ReadMore>
              </Bottom>
            </BlogItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default BlogSection;

const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: white;
  .mySwiper {
    display: flex;
    width: 85%;
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

const BlogItem = styled.div`
  flex: 1;
  border: solid 1px lightgray;
`;

const Top = styled.div`
  height: 350px;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Middle = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  align-items: center;
  height: 45px;
  .icon {
    color: ${primaryColor};
    margin-right: 5px;
    font-size: 30px;
  }
`;

const Author = styled.div`
  display: flex;
  margin-right: 20px;
  margin-left: 15px;
`;

const Comments = styled(Author)``;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Title = styled.h3``;

const Description = styled.p`
  margin: 10px 0;
`;

const ReadMore = styled.a`
  color: ${primaryColor};
  display: flex;
  font-weight: 600;
  align-items: center;
  cursor: pointer;
`;
