const express= require("express");
  const requestRouter=express.Router();
  const {userAuth}=require("../middleware/auth");
  const User=require("../models/user");


  app.post("/sendconnectionrequest", userAuth, async(req, res)=>{
    const senderId=req.user._id;
  
  });


  module.exports=requestRouter;
