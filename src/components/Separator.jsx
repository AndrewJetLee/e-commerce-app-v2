import React from 'react'
import styled from 'styled-components';

const Separator = ({title, desc}) => {
    return (
        <Container>
            <Content>
                <VerticalLine></VerticalLine>
                <Title>Featured Products</Title>
                <Description>Want to know the most popular products from the shop</Description>
            </Content>
        </Container>
    )
}

export default Separator

const Container = styled.div`
    display: flex;
    justify-content: center; 
`

const Content = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justity-content: center; 
    padding-top: 80px;
    padding-bottom: 70px; 
    max-width: 300px;
    text-align: center;  
`
const VerticalLine = styled.span`
    border-right: 1px solid #f57250; 
    height: 25px; 
`


const Title = styled.h3`
    padding: 12px 0; 
    font-size: 24px; 
    font-weight: 500; 
`

const Description = styled.div`
    font-size: 13px; 
    color: rgb(128, 128, 128);
`