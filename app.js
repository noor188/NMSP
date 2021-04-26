const express = require("express");
const app = express();
const path = require("path");
const Product = require("./models/product");
const mongoose = require("mongoose");

// Database
mongoose.connect('mongodb://localhost:27017/NMSP', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// default engine 
app.set("view engine", "ejs");
// extention 
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("home")
})

app.get("/makeproduct", async (req, res) => {
    const prod = new Product({ title: "bag", description: "cheap" });
    await prod.save();
    res.send(prod);
})

app.listen(3000, () => {
    console.log("serving on port 3000")
})


