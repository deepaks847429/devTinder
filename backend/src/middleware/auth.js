const jwt=require("jsonwebtoken");
const User=require("../models/user")



const adminAuth=(req, res, next)=>{
  console.log("admin auth is getting checked");
  const token =xyz;
  const isAdminAuthorized= token===xyz;
  if(!isAdminAuthorized){
    res.status(401).send("unauthorized request");
  }
  else{
    next();
  }
}

const userAuth=async(req, res, next)=>{
  // read the token from request cookies
 try{ 
  const {token}=req.cookies;
  if(!token){
    throw new error("token is not found");
  }
  const decodeObj= await jwt.verify(token, "jorhitvm5uy8buhhhhhh56");
  const {_id}=decodeObj;
  const user=await User.findById(_id);
  if(!user){
    throw new error("user not found");
  }
  req.user=user;
    next();
  }
  catch(err){
    res.status(400).send("user not found");
  }


  // validate the token
  // Find the user
 
  
}

export default{adminAuth, userAuth};