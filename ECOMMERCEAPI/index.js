const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connected"))
    .catch((err) => {
        console.log(err);
    })

app.use(express.json())
// app.use(express.urlencoded())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Servering is listening on port 8080..")
})