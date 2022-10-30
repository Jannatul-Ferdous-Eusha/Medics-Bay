const express = require("express");
const hbs = require("hbs")
const app = express();
const mongoose = require("mongoose")

const routes = require("./routes/main");

// Path setting for Image, css and js
app.use('/static', express.static("public"))

app.use('', routes)

//template engine (hbs)

app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

//db connection

mongoose.connect("mongodb://localhost/doctors-portal", () => {
    console.log("db connected")
})

app.listen(process.env.PORT | 3000, () => {
    console.log("Server Start");
});