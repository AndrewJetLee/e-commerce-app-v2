import styled from 'styled-components';
import CategoryItem from './CategoryItem'
import { CategoriesTopItems } from '../dummyData'

const Categories = () => {
    return (
        <Container>
            <Content>
                <CategoriesTop>
                    {CategoriesTopItems.map((item) => <CategoryItem item={item}/>)}
                </CategoriesTop>
                <CategoriesBottom>

                </CategoriesBottom>
            </Content>
        </Container>
    )
}

export default Categories

const Container = styled.div`
    
`
const Content = styled.div`
`

const CategoriesTop = styled.div`
    margin-top: 100px; 
    width: 100%; 
    display: flex; 
    background-color: white; 
    flex-wrap: wrap; 
    justify-content: center;
`


const CategoriesBottom = styled.div`
    
`