const mongoose = require("mongoose")
const Schema = mongoose.Schema


const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model("Comment", commentSchema)
