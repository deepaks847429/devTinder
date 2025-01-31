const express = require("express");
const app= express();

app.use("/test", (req, res)=>{
  res.send("Hello from seerver");
})
app.use("/deepak", (req, res)=>{
  res.send("hello from deepak")
})
app.use("/deepika",(req, res)=>{
  res.send("hello from deepika")
})
app.listen((3000), ()=>{
  console.log("server is successfully listening on poprt 300...");
});

