const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/Issue")

//Get All Issues
issueRouter.get("/", (res, next) => {
    Issue.find((err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(issues)
    })
})

//Get Issues by user
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.user._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})


//Add a New Entry
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})


//Get one
issueRouter.get("/:issueId",  (req, res, next) => {
    Issue.findById(req.params.issueId, (err, issue) => {
        if(err) {
            res.status(500)
            return next(err)
        } else if(!issue) {
            res.status(404)
            return next(new Error("No Issue Entry Found"))
        }
        return res.send(issue)
    })
})


//Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        req.params.issueId,
        req.body,
        { new: true },
        (err, issue) => {
            if(err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(todo)
        }
    )
})


//Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findByIdAndRemove(req.params.issueId, (err, issue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(issue)
    })
})



module.exports = issueRouter
