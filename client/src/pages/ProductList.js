import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FliterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Fliter = styled.div`
    margin: 20px;
`;
const FliterName = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>    
            <FliterContainer>
                <Fliter>
                    <FliterName>
                        Filter Products:
                    </FliterName>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>L</Option>
                        <Option>L</Option>
                    </Select>
                </Fliter>
                <Fliter>
                    <FliterName>
                        Sort Products:
                    </FliterName>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Fliter>
            </FliterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
