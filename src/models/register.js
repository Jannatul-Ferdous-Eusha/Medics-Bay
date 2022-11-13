const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
   fullname : {
    type: String,
    required: true
   },
   email:{
    type: String,
    unique: true,
    required: true
   },
   password: {
    type: String,
    required: true
   },
   phone: {
    type: Number,
   },
   address: {
    type: String
   },
   gender: {
    type: String,
    require: true
   },
   birthday:{
    type: Date
   }
})

//Collection:
const Register=new mongoose.model("User", userSchema);
module.exports=Register;