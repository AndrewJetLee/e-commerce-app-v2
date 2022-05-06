import Carousel from "../components/Carousel";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import SeparatorButton from "../components/SeparatorButton";
import BlogSection from "../components/BlogSection";
import Testimonials from "../components/Testimonials";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../redux/navSlice";
import Fade from "react-reveal/Fade";

const Home = () => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.nav);

  if (activeTab !== "home") dispatch(setActiveTab("home"));

  return (
    <Container>
      <Navbar />
      <Carousel />
      <Features />
      <Categories />
      <Fade>
        <Products type="home" />
      </Fade>
      <SeparatorButton categoryId="28235" />

      <BlogSection />

      <Fade>
        <Testimonials />
      </Fade>
      <Fade>
        <About />
      </Fade>

      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  overflow-x: hidden;
  background-color: #f4f4f4;
`;
