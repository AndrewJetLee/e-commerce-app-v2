import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Product = ({item}) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Image src={item.image}/>
            <Info>
                <button className="searchButton" onClick={() => navigate(`/product/${item._id}`)}>
                    VIEW
                </button>
            </Info>
        </Container>
    )
}

export default Product

const Container = styled.div`
    width: 100%;
    padding: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: relative; 
`

const Image = styled.img`
    width: 380px;
    height: 400px; 
    object-fit: contain; 
`
const Info = styled.div`
    position: absolute; 
    top: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: rgba(0, 0, 0, 0.25); 
    opacity: 0; 
    transition: all .3s ease;
    cursor: pointer; 
    button {
        background-color: #030364; 
        padding: 18px 54px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        transition: all .167s ease;
        color: white; 
        font-weight: 500; 
        cursor: pointer; 
        .icon {
            font-size:20px; 
        }
        :hover {
            transform: scale(1.1);
        }
    }
    .cartButton {
        margin-right: 15px; 
    }
    :hover {
        opacity: 1;
    }
`