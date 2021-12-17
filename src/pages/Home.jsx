import Carousel from "../components/Carousel";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories />
      <Title>Featured Products</Title>
      <Products />
      <About />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 25px;
`;
