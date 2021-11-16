import React, { useState, useEffect }from 'react'
import { Button } from '@mui/material'
import styled from "styled-components"
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY= process.env.REACT_APP_STRIP_PUBLIC_KEY
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
export const Pay = () => {
    const [stripToken, setstripToken] = useState(null)

    const onToken = (token) => {
        setstripToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
               const res = await axios.post("http://localhost:8080/api/checkout/payment", {
                   tokenId: stripToken.id,
                   amount: 2000,
               })
               console.log(res);
            } catch (err) {
               console.log(err); 
            }
        }
        stripToken && makeRequest()
    }, [stripToken])

    return (
        <Container>
            <StripeCheckout
            name="R.H Shop"
            image="https://avatars.githubusercontent.com/u/32448535?v=4"
            billingAddress
            shippingAddress
            description = " Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
                <Button>Pay Now</Button>
            </StripeCheckout>
        </Container>        
    )
}
