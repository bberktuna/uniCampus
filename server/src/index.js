require("./models/User")

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const authRoutes = require("./routes/authRoutes")

const requireAuth = require("./middlewares/requireAuth")


const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri  = "mongodb+srv://bla_raynaud:tXZd1FA2ZfiiKH9A@unicampuscluster.1ibyb.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
})



mongoose.connection.on("connected", () => {
    console.log("connected to mongo instance")
})
mongoose.connection.on("error", (err) => {
    console.error("error connecting to mongo", err)
})


app.get("/", requireAuth, (req, res) => {//get request to root directory and run func
    res.send(`Your email: ${req.user.email}`)//requireAuth token icin önce middleware calısıyo ara yani
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})