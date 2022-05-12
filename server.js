const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()
const expressJwt = require("express-jwt")

//Middleware
app.use(express.json())
app.use(morgan("dev"))


//connect to Database
mongoose.connect("mongodb://localhost:27017/rockthevote", ()=>console.log("connected to rock the vote database"))

//Routes
app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms:["HS256"]})) //req.user
app.use("/api/issue", require("./routes/userRoute.js"))



//Error Handler
app.use((err,res) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})


//Server
app.listen(9001, ()=> {
    console.log("server connected to port 9001")
})
