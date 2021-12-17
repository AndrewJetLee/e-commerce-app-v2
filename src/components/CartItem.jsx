import { Container } from '@mui/material';
import styled from 'styled-components';

const CartItem = () => {
    return (
        <Wrapper>
            <Left>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"></Image>
            </Left>
            <Center>
                <ProductName><strong>Product:</strong> DRIP SHOES</ProductName>
                <ProductId><strong>ID:</strong>  98712980371</ProductId>
                <ProductColor>Black</ProductColor>
                <ProductSize><strong>Size:</strong>  37.5</ProductSize>
            </Center>
            <Right>
                <Counter>1</Counter>
                <Total>$74.98</Total>
            </Right>

        </Wrapper>
    )
}

export default CartItem


const Wrapper = styled.div`
    display: flex;
    border-bottom: solid 1px lightgray; 
`
const Left = styled.div`
    flex: 1;
    display: flex; 
    justify-content: center;
    align-items: center; 
`
const Image = styled.img`
    width: 200px; 
`

const Center = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column; 
    margin-left: 10px; 
`
const ProductName = styled.span`
    margin: 10px 0; 
`

const ProductId = styled(ProductName)``
const ProductSize = styled(ProductName)``
const ProductColor = styled(ProductName)``

const Right = styled.div`
    flex: 1.3;
    display: flex;
    justify-content: space-between; 
    margin-top: 10px;
    font-size: 18px; 
`
const Counter = styled.div``

const Total = styled.span`
    margin-right: 10px; 
`