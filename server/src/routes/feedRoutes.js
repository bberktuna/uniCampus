const express = require("express")
const mongoose = require("mongoose")
const Post = mongoose.model("Post")

const router = express.Router()

//GET THE CREATED POSTS
router.get("/feed", async (req, res)=> {

    const posts = await Post.find()
    res.send(posts)

})

//CREATE NEW POST
router.post("/feed" , async (req, res)=> {
  
    const {stringContent} = req.body

    try{
        const post = new Post({stringContent})
        await post.save()

        res.send( post)
        
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
  
      if (req.body.stringContent) {
        post.stringContent = req.body.stringContent
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