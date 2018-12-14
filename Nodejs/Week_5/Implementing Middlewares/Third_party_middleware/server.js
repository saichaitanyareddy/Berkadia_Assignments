const express=require('express');
const app=express();
const cookie=require('cookie-parser');
app.use(cookie());

var logged=(req,res,next)=>{
    console.log("Entered into home page");
    next();
};
app.get('/cookie',logged,(req,res)=>{
    
    res.cookie('User-routings', 'routing details', { expires: new Date(Date.now() + 900000), httpOnly: true });
    console.log("cookie created");    
    res.send("cookie created check in for available cookies");
});

app.get('/',(req,res)=>{
    res.send("Third party middleware example");
});
app.listen("3000",(req,res)=>{console.log("application is running on port:3000");});