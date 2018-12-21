const express=require('express');
const app=express();
var router=express.Router();
var http=require('http');
app.use(router);

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/users',{useNewUrlParser:true}).then(()=>{console.log("connected to the database");});
const usersSchema=new mongoose.Schema({
    ename:String,
    password:String
});
const Users=mongoose.model('Users',usersSchema);

var Authenticate=async function (req,res,next){
    if(!req.query.username || !req.query.password)
    {
        res.end("Enter correct details");
    }
    else{
        const result =await Users.find({ename:req.query.username,password:req.query.password}).select();
        if(result.length==0)
        {
            res.status(401).send("unauthorized");
        }
        else{
            next();
        }
    }
}

router.get('/login',Authenticate,(req,res)=>{
   
    http.get({
        host:'localhost',
        port:7000,
        path:req.originalUrl
    },(resp)=>{
        let data='';
        resp.on('data',(chunk)=>{
            data+=chunk;
        });
        resp.on('end',()=>{
            res.send(data);
        });

    }).on('error',(err)=>{
        console.log('Error:'+err.message);
    });
    
    console.log("User access details are sent");
});


app.get('/',(req,res)=>{
    res.send("Provides Authentication for user while logging in");
});
app.listen(5000,()=>{console.log("loginService server is running on port:5000");});
