const express = require("express")//npm install express
const path = require('path');
const body_parser = require("body-parser")
const app = express()
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: false}))// This makes it so we can easily access requests

app.use(express.static("public")) //Using public folder
app.use(express.static('/public'));
app.use(body_parser.json())


app.get("/" , (req,res) => {
    res.render("main")
})

app.use((req, res, next) => {
    res.status(400).render("main"); // render the 404.ejs page
});

app.listen(3025)