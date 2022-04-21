import Carousel from "../components/Carousel";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Separator from "../components/Separator";
import { SeparatorItems } from "../dummyData";

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories />
      <Separator item={SeparatorItems[1]}/>
      <Products type="home"/>
      <Separator item={SeparatorItems[2]}/>
      <About />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  overflow-x: hidden;
`;
