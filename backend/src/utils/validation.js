const validator=require("validator");

const validateSignUpData=(req)=>{

  const {firstname, lastname, emailId, password}=req.body;
  if(!firstname || !lastname || !emailId || !password){
    throw new Error("all fields are mandatory");
  }
  if(!validator.isEmail(emailId)){
    throw new Error("Email is not valid");
  }
  if(!validator.isStrongPassword(password)){
    throw new Error("password is not strong");
  }
}

export default validateSignUpData;

