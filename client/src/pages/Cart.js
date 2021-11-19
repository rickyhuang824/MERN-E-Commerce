import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { useNavigate } from "react-router-dom";

const Key = ''

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })};
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
const TopTexts = styled.div`
    ${mobile({ display: "none" })};
`
const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`

const Info = styled.div`
    flex: 3;
`

const ProductContainer = styled.div``
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
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
    ${mobile({ margin: "15px" })};

`
const Amount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })};
`
const Price = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ margin: "20px" })};
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
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
               const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 1 * 100,
               }) 
               navigate('/success', {
                   state: {
                       stripeData: res.data,
                       cart: cart, 
                   }
                })
            } catch (err) {
               console.log(err); 
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, cart.total, navigate])

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
                        {
                            cart.products.map((product) => {
                                return (
                                    <ProductContainer>
                                        <Product>
                                            <ProductDetails>
                                                <Image src={product.img}></Image>
                                                <Details>
                                                    <ProductName><b>Products: </b>{ product.title}</ProductName>
                                                    <ProductID><b>ID: </b>{ product._id }</ProductID>
                                                    <ProductColor color={ product.color }></ProductColor>
                                                    <ProductSize><b>Size: </b>{ product.size }</ProductSize>
                                                </Details>
                                            </ProductDetails>
                                            <PriceDetail>
                                                <ProductAmountContainer>
                                                    <Remove/>
                                                    <Amount>{ product.quantity }</Amount>
                                                    <Add />
                                                </ProductAmountContainer>
                                                <Price>$ { product.price * product.quantity }</Price>
                                            </PriceDetail>
                                        </Product>
                                        <Hr />
                                    </ProductContainer>
                                )
                            })
                        }
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Sub Total</SummaryItemText>
                            <SummaryItemPrice>$ { cart.total }</SummaryItemPrice>
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
                            <SummaryItemPrice>$ { cart.total }</SummaryItemPrice>
                        </SummaryItem>
                        {
                            stripeToken
                                ? (<span>Processing, Please wait...</span>)
                                : (
                                    <StripeCheckout
                                    name="R.H Shop"
                                    image="https://avatars.githubusercontent.com/u/32448535?v=4"
                                    billingAddress
                                    shippingAddress
                                    description = {` Your total is $${cart.total}`}
                                    amount={cart.total * 100}
                                    token={onToken}
                                    stripeKey={KEY}
                                    >
                                        <Button>CHECKOUT NOW</Button>
                                    </StripeCheckout>
                                )
                        }
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Cart
