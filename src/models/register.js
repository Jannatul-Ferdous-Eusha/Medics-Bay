const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");

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
    type: Number
   },
   address: {
    type: String
   },
   gender: {
    type: String
   },
   birthday:{
    type: Date
   },
   tokens:[{
      token:{
         type: String,
         required: true
      }
   }]
})

userSchema.methods.generateAuthToken=async function(){
   try {
      const token=jwt.sign({
         _id:this._id.toString()},
         "medicsbaysecretkey12"
      );
      this.tokens=this.tokens.concat({token:token}) // db tokens->token gets the generated "token"
      await this.save();
      return token;
   } catch (error) {
      console.log("error in generateauthtoken: " + error);
   }
}

//Collection:
const Register=new mongoose.model("User", userSchema);
module.exports=Register;