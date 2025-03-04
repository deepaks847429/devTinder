const express = require("express");
const connectDB = require("./config/database");
const User= require("./models/user")

const app= express();


app.post("/signup",async(req, res)=>{
  const userObj={
    firstName : "Deepak",
    lastName: "kumar",
    emailId:" deep.dkt0@gmail.com",
    password:"Sadiya"
  }
  // creating new instance of User model
  const user= new User(userObj);
  await user.save();
  res.send("user created successfully");
})

connectDB().then(()=>{
  console.log("database connected...");
  app.listen((3000), ()=>{
    console.log("server is successfully listening on poprt 300...");
  });
}).catch((err)=>{
  console.log(err)
})



