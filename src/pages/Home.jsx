import Carousel from "../components/Carousel";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Separator from "../components/Separator";
import SeparatorButton from "../components/SeparatorButton";
import { SeparatorItems } from "../dummyData";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../redux/navSlice";

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

      <Separator item={SeparatorItems[1]} />
      <Products type="home" />
      <SeparatorButton/>
      <About />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  overflow-x: hidden;
`;
