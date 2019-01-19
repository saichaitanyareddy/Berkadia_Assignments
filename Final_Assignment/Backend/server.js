const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const questions=require('./routes/questions');
const result=require('./routes/result');
const port=process.env.port||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/',[questions,result]);

app.get('/',(req,res)=>{
    res.send('welcome to node');
})

app.listen(port,()=>{console.log(`server is running on port:${port}`);});