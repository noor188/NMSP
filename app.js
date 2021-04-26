const express = require("express");
const app = express();
const path = require("path");

// default engine 
app.set("view engine", "ejs");
// extention 
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("home")
})

app.listen(3000, () => {
    console.log("serving on port 3000")
})


