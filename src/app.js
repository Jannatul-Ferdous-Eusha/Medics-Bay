const { urlencoded } = require("body-parser");
const express = require("express");
const hbs = require("hbs")
const app = express();
const mongoose = require("mongoose"); //13.11
require("./db/conn");
const Register=require("./models/register");

const routes = require("./routes/main");

//get user details in json
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Path setting for Image, css and js
app.use('/static', express.static("public"))

app.use('', routes)

//template engine (hbs)

app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

//user registration
app.post("/register", async(req,res) =>{
    try {
        const registerUser=new Register({
            fullname: req.body.fname,
            email: req.body.email,
            password: req.body.pass,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            birthday: req.body.birthday
        })
        //data "get" done now save it
        const registered = await registerUser.save();
        console.log("User registered successfully");
        res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

//db connection

// mongoose.connect("mongodb://localhost/doctors-portal", () => {
//     console.log("db connected")
// })

app.listen(process.env.PORT | 3000, () => {
    console.log("Server Start");
});