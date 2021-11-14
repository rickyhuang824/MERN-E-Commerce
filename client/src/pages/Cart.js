import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`


const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    /* padding: 100px 0px; */
    margin-left: 10px;
`
const ProductName = styled.span`

`;

const ProductID = styled.span`
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;    
    border-radius: 50%;
    background-color: ${(props) => props.color};
`
const ProductSize = styled.span`
    
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Amount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const Price = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    background-color: black;
    padding: 10px;
    color: white;
    font-weight: 600;
`


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>KEEP SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="/asset/products/hoodie-1.jpg"></Image>
                                <Details>
                                    <ProductName><b>Products: </b>This is a hoodie</ProductName>
                                    <ProductID><b>ID: </b>123456</ProductID>
                                    <ProductColor color="black"></ProductColor>
                                    <ProductSize><b>Size: </b>XL</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove/>
                                    <Amount>2</Amount>
                                    <Add />
                                </ProductAmountContainer>
                                <Price>$ 20</Price>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="/asset/products/hoodie-1.jpg"></Image>
                                <Details>
                                    <ProductName><b>Products: </b>This is a hoodie</ProductName>
                                    <ProductID><b>ID: </b>123456</ProductID>
                                    <ProductColor color="black"></ProductColor>
                                    <ProductSize><b>Size: </b>XL</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove/>
                                    <Amount>2</Amount>
                                    <Add />
                                </ProductAmountContainer>
                                <Price>$ 20</Price>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Sub Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Cart
