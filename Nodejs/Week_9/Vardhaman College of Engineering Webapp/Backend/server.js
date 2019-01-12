const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const results=require('./Server/routes/studentResults');
const students=require('./Server/routes/studentDetails');
const branch=require('./Server/routes/branchDetails');
const search=require('./Server/routes/search');
const port=process.env.port||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/',[results,students,branch,search]);

app.get('/',(req,res)=>{
    res.send('welcome to node');
})

app.listen(port,()=>{console.log(`server is running on port:${port}`);});