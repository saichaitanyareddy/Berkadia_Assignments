const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Welcome to Node");
});
app.listen(3000,()=>{console.log("server is running");});