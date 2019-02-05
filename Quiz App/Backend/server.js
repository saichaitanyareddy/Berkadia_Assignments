const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT||'3000';

const questions=require('./routes/questions');
const results=require('./routes/results');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',[questions,results]);

app.get('/',(req,res)=>{
    res.send("Welcome to Node");
});

app.listen(port,()=>{console.log(`server is running on ${port}`);});