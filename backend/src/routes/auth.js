const express= require("express");
const authRouter= express.Router();
const User= require("../models/user");
const {validateSignUpData}=require("../utils/validation");
const bcrypt=require("bcrypt");


authRouter.post("/signup",async(req, res)=>{
// validation of data
try {
  validateSignUpData(req);
  //Encrypt the password
  const{firstName, lastName, emailId, password}=req.body;
  const passwordHash=await bcrypt.hash(password,10);
    // creating a new instance of the user model
    const user= new User({
      firstName,
      lastName,
      emailId,
      password:passwordHash,
    });
    // saving the user to the database
    await user.save();
    res.status(201).send("user added successfully");
  } catch (error) {
    res.status(400).send("error saving the user:"+error);
  }
}); 

authRouter.post("/login",async(req, res)=>{
  try {
    const{emailId, password}=req.body;
    const user = await User.findOne({emailId:emailId});
    if(!user){
      throw new error("Invalid credentials");
    }
    const isPasswordValid=await user.validatePassword(password);
    if(isPasswordValid){

      // create jwt token
      const token=await user.getJWT();

      // add the token to cookie and send the response to the user 
      res.cookie("token", token, {expires: new Date(Date.now()+ 7*24*60*60*1000)});
      res.send("Login successful");
    }
    else{
      throw new error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).send("lOGIN FAILED");
  }
})

// logout api
authRouter.post("/logout", async(req, res)=>{
  try {
    res.cookie("token", null, {expires: new Date(Date.now()),});
    res.send("Logged out successfully")
    
  } catch (error) {
    res.status(400).send("error logging out");    
  }
})


module.exports=authRouter;
