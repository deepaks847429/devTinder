const express = require("express");
const connectDB = require("./config/database");
const User= require("./models/user")
const bcrypt=require("bcrypt");
const validateSignUpData=require("./utils/validation");
const cookieParser=require("cookie-parser");
const jwt=require("jsonwebtoken");
const{adminAuth, userAuth}= require("./middleware/auth")

const app= express();
app.use(express.json()); 
app.use(cookieParser());


const authRouter=require("./routes/auth");
const profileRouter=require("./routes/profile")
const requestRouter=require("./routes/request")
const userRouter=require("./routes/user");


app.use("/", authRouter);
app,use("/", profileRouter);
app.use("/", requestRouter);
app.use("/",userRouter);



connectDB().then(()=>{
  console.log("database connected...");
  app.listen((3000), ()=>{
    console.log("server is successfully listening on poprt 300...");
  });
}).catch((err)=>{
  console.log(err)
})



