import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => { 
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat 
                        ? `http://localhost:8080/api/products?category=${cat}`
                        : "http://localhost:8080/api/products"
                ) 
                
                setProducts(res.data)
            } catch (err) {
               console.log(err); 
            }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
       cat && setFilteredProducts(
           products.filter((item) => 
                Object.entries(filters).every(([key, value]) => {
                    return item[key].includes(value)
                })
            )
	   )
    }, [ products, cat, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
        } else if (sort === "asc") {
            setFilteredProducts((prev)=> [...prev].sort((a, b) => a.price - b.price))
        } else if (sort === "desc") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort, products])

    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item._id}></Product>)
                : products.slice(0, 8).map((item) => <Product item={item} key={item._id}></Product>)
            } 
        </Container>
    )
}

export default Products
