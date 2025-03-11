const express= require("express");
  const requestRouter=express.Router();
  const {userAuth}=require("../middleware/auth");
  const User=require("../models/user");
  const ConnectionRequest=require("../models/connectionRequest")


  app.post("/request/send/:status/:toUserId", userAuth, async(req, res)=>{
    try {
      const fromUserId=req.user.Id;
      const toUserId=req.params.toUserId;
      const status=req.params.status;


      const allowedStatus=["ignored", "interested"];
      if(!allowedStatus.includes(status)){
        return res.status(400).json({message :  "Invalid status type : " + status});
      }
       // if there ia an existing connectionrequest
      const existingConnectionrequest= await ConnectionRequest.findOne({
        fromUserId,
        toUserId,
        status
      })

      const connectionRequest=new connectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data=await connectionRequest.save();
      res.json({message:"connection request sent successfully", data,});      
    } catch (error) {
      res.status(400).send("Error: "+err.message);
    }
    res.send(User.firstName + "sent the connection request");
  
  });


  module.exports=requestRouter;
