const express=require('express');
const app=express();
var Authenticate=(req,res,next)=>{
    if (!req.query.username || !req.query.password) {
       
        res.send('login failed'); 
          
    } else if(req.query.username === "Sai" || req.query.password === "12345678") {
        console.log("login success!");
        next();
      }
      
}

app.get('/login',Authenticate,(req,res)=>{
    res.send("Welcome to Node");
});


app.get('/',(req,res)=>{
    res.send("This server will provide Authentication service");
});

app.listen("7000",()=>{console.log("server is running on port:7000");})