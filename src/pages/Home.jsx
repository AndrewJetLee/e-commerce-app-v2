import Carousel from "../components/Carousel";
import styled from 'styled-components';
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Container>
            <Carousel /> 
            <Categories />
            <Products />
            <About />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`

`
