const express=require("express");
const profileRouter=express.Router();
const {userAuth}=require("../middleware/auth");
const user=require("../models/user");
const validateProfileData=require("../utils/validation");


profileRouter.get("/profile", userAuth, async(req, res)=>{
  
 try{
    const user=req.user;
    if(!user){
      throw new error("user doesn't exist.")
    }
    res.send(user);
  }
  catch(error){
    res.status(400).send("unauthorized access");
  }
})


// edit profile api
profileRouter.patch("/profile/edit", userAuth, async(req, res)=>{
  try {
    if(!validateProfileData(req.body)){
      return res.status(400).send("invalid data");
    }
    const loggedInUser=req.user;
    Object.keys(req.body).forEach((key)=>(loggedInUser[key]=req.body[key]));
    await loggedInUser.save();
    res.json({message:`${loggedInUser.firstName}, your profile updated successfully.`, data:loggedInUser});
  } catch (error) {
    res.status(400).send("something went wrong");
  }
})

// forget password api
profileRouter.patch("/profile/forgetpassword", userAuth, async(req, res)=>{
  try {
     const loggedInuser=req.user;
     const{oldPassword, newPassword}=req.body;
     const isPasswordValid= await loggedInuser.validatePassword(oldPassword);
     if(!isPasswordValid){
        return res.status(400).send("invalid password");
     }
     loggedInuser.password=newPassword;
     await loggedInuser.save();
     res.send("password updated successfully");


  } catch (error) {
    res.status(400).send("something went wrong");;
  }
})

// profileRouter.patch("/user/:userId",async(req, res)=>{
//   const userId=req.params?.userId;
//   const ALLOWED_UPDATES=["photoUrl","about","gender","age","skills"];
//   const isUpdateAllowed=Object.keys(req.body).every(k=>ALLOWED_UPDATES.includes(k));
//   if(!isUpdateAllowed){
//     throw new error("invalid updates");
//   }
//   if(req.body?.skills.length>10){
//     throw new error("skills limit exceeded");
//   }
//   try{
//     const user =await user.findByIdAndUpdate(userId, req.body);
//     if(!user){
//       res.status(404).send("user not found");
//     }
//     else{
//       res.send("user updated successfully");
//     }
//   }catch(error){
//     res.status(400).send("something went wrong");}
// });

module.exports=profileRouter;