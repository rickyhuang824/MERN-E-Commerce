import axios from "axios";

const BASE_URL = "http://localhost:8080/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTFmNzdjYzgwYWViNTQ4MWNiNzU4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzEzMTYwMywiZXhwIjoxNjM3MzA0NDAzfQ.YmWzp7gZnDrllGyaRM1BC3lFVY-rNb69s6NIhK0URHs"
// const user = JSON.parse(localStorage.getItem("persist:root")).user
// const Token = currentUser?.accessToken

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})