const express = require("express");
const app= express();

// this will match all the http method Api call to user
app.use("/deepak", (req, res)=>{
  res.send("Hello from seerver");
})
app.get
app.listen((3000), ()=>{
  console.log("server is successfully listening on poprt 300...");
});

