import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Success = () => {
    return (
        <Container>
            <div>Successful.</div>
            <div>Your order is being prepared. Thanks for choosing R.H</div>
        </Container>        
    )
}
