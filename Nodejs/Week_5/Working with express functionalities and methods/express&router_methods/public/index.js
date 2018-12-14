let name="Sai";
console.log("name");
var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send('hello.html');
})