const express = require("express")
const mongoose = require("mongoose")
const Post = mongoose.model("Post")
const jwt = require("jsonwebtoken")

const router = express.Router()

//GET THE CREATED POSTS
router.get("/feed", async (req, res)=> {
    const {post_likes, post_dislikes, post_stringContent} = req.body

    const posts = await Post.find()
    res.send(posts)

})

//CREATE NEW POST
router.post("/feed" , async (req, res)=> {
    const {post_likes, post_dislikes, post_stringContent} = req.body

    try{
        const post = new Post({
            post_likes, 
            post_dislikes,
            post_stringContent
        })
        await post.save()
        res.send(post)

    }catch(err){
        return console.log("error on // feedRoutes.js//router.post/feed")
    }
})

//GET INDIVIDUAL POST
router.get("/feed/:id", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        res.send(post)
      } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
      }
})

//UPDATE POST
router.patch("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findOne({ _id: req.params.id })
  
      if (req.body.title) {
        post.post_stringContent = req.body.post_stringContent
      }
  
      await post.save()
      res.send(post)
    } catch {
      res.status(404)
      res.send({ error: "Post doesn't exist!" })
    }
  })

  //DELETE POST
router.delete("/posts/:id", async (req, res) => {
try {
    await Post.deleteOne({ _id: req.params.id })
    res.status(204).send()
} catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
    }
})

module.exports = router