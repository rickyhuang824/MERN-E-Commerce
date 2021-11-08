import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => {
                return (
                    <Product item={item} key={item.id}></Product>
                )
            })} 
        </Container>
    )
}

export default Products
