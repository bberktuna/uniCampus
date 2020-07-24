const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    post_likes: {
        type:Number,
        unique:true,
        required:true
    },

    post_dislikes:{
        type:Number,
        required:true
    },
    post_stringContent:{
        type:String,
        required:true,
        maxlength:240,
        minlength:1
    }
})

mongoose.model("Post", postSchema)