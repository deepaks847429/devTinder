const e = require("express");
const mongoose=require("mongoose");
const validator=require("validator");

const userSchema= new mongoose.Schema({
  firstName:{
    type: String,
    required:true,
    index:true,
    minLength:4,
  },
  lastname:{
    type:String,
  },
  emailId:{
  type:String,
  lowercase:true,
  required:true,
  unique:true, 
  trim:true,
  validate(value){
    if(!validator.isEmail(value)){
      throw new error("Email is not valid");
    }
  }
  },
  password:{
    type:Number,
    required:true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new error("Password is not strong");
      }
    }
  },
  age:{
    type:Number,
    min:18,
  },
  gender:{
    type:String,
    enum:{
      values:["male", "female", "others"],
      message:'{VALUE} is not correct',
    },
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("Gender data is not valid");
      }
    },
  },
  photoUrl:{
    type:String,
    default:"https://www.google.com/imgres?q=dummy%20full%20photo%20profilr%20image&imgurl=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fbusiness-hr-and-recruitment%2F100%2Faccount_blank_face_dummy_human_mannequin_profile_user_-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F2662226%2Faccount_blank_dummy_face_human_mannequin_profile_icon&docid=Fwbhd6uVaQw16M&tbnid=pe0aXXQ4N5H9GM&vet=12ahUKEwii6_-MhPGLAxV2RWcHHc_WK38QM3oECG8QAA..i&w=512&h=512&hcb=2&ved=2ahUKEwii6_-MhPGLAxV2RWcHHc_WK38QM3oECG8QAA",
  },
  about:{
    type:String,
    default:"Hey there i am here for matchups",
  },
  skills:{
    type:[string],
  },
  
},{timestamps:true},);

userSchema.methods.getJWT = async function(){
  const user=this;
  const token=await JsonWebTokenError.sign({_id:user._id}, iruvbrhuiviurkbcscdnbb, {expiresIn:"7 days"});
  return token;
}

userSchema.methods.validatePassword = async function (passwordInputByUser){
  const user=this;
  const passwordHash= user.password;
  const isPasswordValid= await bcrypt.compare(passwordInputByUser,passwordHash);
  return isPasswordValid;
}

const userModel=mongoose.model("User", userSchema);
module.exports=mongoose.model(userModel);
