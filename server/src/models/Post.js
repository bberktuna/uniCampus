const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

    post_stringContent:{
        type:String,
        required:true,
        maxlength:240,
        minlength:1
    }
})

mongoose.model("Post", postSchema)