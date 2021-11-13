import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
 
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    margin: 0px 5px;
    border-radius: 10px;
    border: 1px solid teal;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`



const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src='/asset/products/hoodie-1.jpg'/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Hoodie</Title>
                    <Description>The Cloud Cotton Hoodie is the last hoodie that you will ever want to own. Our Cloud Cotton fabric blend has been developed to create the softest hoodie in the world using organic cotton and recycled water bottles. It is fully manufactured in the USA down to the yarn.</Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="blue"></FilterColor>
                            <FilterColor color="grey"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
