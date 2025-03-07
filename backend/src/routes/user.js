const express=require("express");
const userRouter=express.Router();
const User=require("../models/user");
const {userAuth}=require("../middleware/auth");
const {validateSignUpData}=require("../utils/validation");


userRouter.get("/feed", async(req, res)=>{
  try {
    const users= await User.find({});
    res.send(users);
  } catch (error) {
    res.status(404).send("something went wrong");
  }
})

module.exports=userRouter;