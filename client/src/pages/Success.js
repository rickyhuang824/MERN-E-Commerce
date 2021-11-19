import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { userRequest } from '../requestMethods'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    padding: 10;
    margin-top: 20;
`

export const Success = () => {

    const location = useLocation()
    const data = location.state.stripeData
    const cart = location.state.cart
    const [orderId, setOrderId] = useState(null)
    const currentUser = useSelector(state => state.user.currentUser)

    useEffect(() => {
        const createOrder = async () => {
            try {
               const res = await userRequest.post("/orders", {
                    usreId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address
               }) 
               setOrderId(res.data._id)
            } catch (err) {
               console.log(err); 
            }
        }
        data && createOrder()
    }, [cart, data])
    return (
        <Container>
            {
                orderId
                    ? `Order has been created successfully. Your order number is ${orderId}`
                    : `Successfull. Your order is being prepared...`
            }
            <Link to="/">
                <Button>Go to HomePage</Button>
            </Link>
        </Container>
    )
}
