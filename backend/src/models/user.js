const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
  firstName:{
    type: String,
  },
  lastname:{
    type:String,
  },
  emailId:{
  type:String,
  },
  password:{
    type:Number,
  },
  age:{
    type:Number,
  },
  gender:{
    type:String,
  },
});

const userModel=mongoose.model("User", userSchema);
module.exports=mongoose.model(userModel);
