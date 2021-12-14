import styled from 'styled-components';
import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <Container>
            <Content>
                <CategoriesTop>
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    
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
    width: 100%; 
    display: flex; 
    background-color: teal; 
`


const CategoriesBottom = styled.div`
    
`