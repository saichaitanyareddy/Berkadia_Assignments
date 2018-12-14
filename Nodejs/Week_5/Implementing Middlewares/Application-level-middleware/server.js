const express=require('express');
const app=express();
var logged=(req,res,next)=>{
    console.log("Entered into home page");
    next();
};

app.get('/',logged,(req,res)=>{
    res.send("Welcome to Node");
});

app.listen("3000",(req,res)=>{console.log("application is running on port:3000");});