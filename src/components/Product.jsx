import styled from 'styled-components';
import { ShoppingCartOutlined, SearchOutlined} from '@mui/icons-material/';
import { useNavigate } from "react-router-dom";

const Product = ({item}) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Image src={item.image}/>
            <Info>
                <button className="cartButton">
                    <ShoppingCartOutlined className="icon cartIcon"/>
                </button>
                
                <button className="searchButton" onClick={() => navigate(`/product/${item._id}`)}>
                    <SearchOutlined className="icon searchIcon"/>
                </button>
            </Info>
        </Container>
    )
}

export default Product

const Container = styled.div`
    width: 100%;
    height: 280px; 
    padding: 20px;
    background-color: #fdfdfd;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: relative; 
`

const Image = styled.img`
    width: 180px;
    height: 180px; 
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
        border-radius: 50%; 
        background-color: white; 
        padding: 9px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        transition: all .167s ease;
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