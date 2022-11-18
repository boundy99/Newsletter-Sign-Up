const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("Public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/HTML/signup.html")
})

app.post("/", (req, res) => {
    res.send("We live")
})
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})