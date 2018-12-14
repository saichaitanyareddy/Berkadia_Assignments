const express=require('express');
const app=express();

app.get("/", function (req, res) {
    throw new Error("BROKEN"); // Express will catch this on its own.
});

app.listen("3000",(req,res)=>{console.log("application is running on port:3000");});