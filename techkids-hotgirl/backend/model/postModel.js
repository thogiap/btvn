const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const PostSchema = new Schema({
    author: String,
    date: Date,
    post: String,
    view: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    
},
{
    timestamps: true
});

const PostsModel = model("post", PostSchema);

module.exports = PostsModel;