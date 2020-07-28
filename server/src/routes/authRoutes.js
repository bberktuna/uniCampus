const express = require("express")
const mongoose = require("mongoose")
const User = mongoose.model("User")
const jwt = require("jsonwebtoken")


const router = express.Router()


router.get("/profile/:id", async (req, res) => {
    try{
        const user = await await User.findOne({ _id: req.params.id})
        res.send(user)
    }catch {
        res.status(404)
        res.send({ error: "user doesnt't exist" })
      }
})

router.post("/signup", async (req, res) => {
    const { email, password } = req.body

    try{
        const user = new User({email, password })
        await user.save()

        const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY")
        res.send({ token })//token: token
    }
    catch(err){
        return res.status(422).send(err.message)
    }
})




router.post("/signin", async (req, res) => {
    const { email, password} = req.body
    
    if(!email || !password ){
        return res.status(422).send({ error: "Must provide email pas and username"})
    }

    const user = await User.findOne({ email })
    if(!user){
        return res.status(404).send({ error:" Email not found "})
    }


    try{
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id}, "MY_SECRET_KEY")
        res.send({ token })
    }
    catch(err) {
        return res.status(422).send({ error: "invaild password"})
    }
})





module.exports = router