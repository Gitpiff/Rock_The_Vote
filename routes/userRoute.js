const express = require("express")
const userRouter = express.Router()
const User = require("../models/User")

//Get All
userRouter.get("/", (req, res, next) => {
    User.find((err,users) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(users)
    })
})


module.exports = userRouter
