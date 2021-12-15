import Carousel from "../components/Carousel";
import styled from 'styled-components';
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
    return (
        <Container>
            <Carousel /> 
            <Categories />
            <Products />
        </Container>
    )
}

export default Home

const Container = styled.div`

`
