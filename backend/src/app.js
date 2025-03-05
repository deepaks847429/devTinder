const express = require("express");
const connectDB = require("./config/database");
const User= require("./models/user")
const bcrypt=require("bcrypt");
const validateSignUpData=require("./utils/validation");

const app= express();
app.use(express.json()); 


app.post("/signup",async(req, res)=>{
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
})

// login api
app.post("/login",async(req, res)=>{
  try {
    const{emailId, password}=req.body;
    const user = await User.findOne({emailId:emailId});
    if(!user){
      throw new error("Invalid credentials");
    }
    const isPasswordValid=bcrypt.compare(password, user.password);
    if(isPasswordValid){
      res.send("Login successful");
    }
    else{
      throw new error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).send("lOGIN FAILED");
  }
})



// find user by email
app.get("/user", async(req, res)=>{
  const userEmail=req.body.emailId;
  
  try {
   const users= await User.find({emailId:userEmail});
   if(users.length===0){
    res.status(404).send("user not found");
   }
   res.send(users);
    
  } catch (error) {
    res.status(400).send("something went wrong")
  }

});
// feed API to get all the users
app.get("/feed", async(req, res)=>{
  try {
    const users= await User.find({});
    res.send(users);
  } catch (error) {
    res.status(404).send("something went wrong");
  }
})

// update user by finding the usee by id
app.patch("/user/:userId",async(req, res)=>{
  const userId=req.params?.userId;
  const ALLOWED_UPDATES=["photoUrl","about","gender","age","skills"];
  const isUpdateAllowed=Object.keys(req.body).every(k=>ALLOWED_UPDATES.includes(k));
  if(!isUpdateAllowed){
    throw new error("invalid updates");
  }
  if(req.body?.skills.length>10){
    throw new error("skills limit exceeded");
  }
  try{
    const user =await user.findByIdAndUpdate(userId, req.body);
    if(!user){
      res.status(404).send("user not found");
    }
    else{
      res.send("user updated successfully");
    }
  }catch(error){
    res.status(400).send("something went wrong");}
});

// delete user by finding the user by id
app.delete("/user", async(req, res)=>{
  const userId=req.body.id;
  try {
    const user=await User.findByIdAndDelete(userId);
    if(!user){
      res.status(404).send("user not found");
    }
    else{
      res.send("user deleted successfully");
    }
    
  } catch (error) {
    res.status(400).send("something went wrong");
  }
})

connectDB().then(()=>{
  console.log("database connected...");
  app.listen((3000), ()=>{
    console.log("server is successfully listening on poprt 300...");
  });
}).catch((err)=>{
  console.log(err)
})



