const mongoose = require("mongoose")
const Schema = mongoose.Schema


const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
    // ,
    // upVotes: {
    //     type: Number,
    //     required: true
    // },
    // downVotes: {
    //     type: Number,
    //     required: true
    // },
    // totalVotes: {
    //     type: Number,
    //     required: true
    // },
    // comments: {
    //     type: Object,
    //     required: true
    // }
})


module.exports = mongoose.model("Issue", issueSchema)
