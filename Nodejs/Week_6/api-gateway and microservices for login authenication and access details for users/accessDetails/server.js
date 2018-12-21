const express=require('express');
const app=express();
let BodyParser=require('body-parser');
app.use(BodyParser.json());
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/accessDetails',{useNewUrlParser:true}).then(()=>{console.log("connected to mongoDB");});
const accessSchema=new mongoose.Schema({
    eid:Number,
    ename:String,
    specialization:String,
    access:String,
    experience:Number
});
const Acc=mongoose.model('Acc',accessSchema);

var details=async function(req,res,next){
    
    const result=await Acc.find({ename:req.query.username}).select();
    res.json(result);
}
app.get('/login',details,()=>{
    console.log("access details are sent");
});


app.get('/',(req,res)=>{
    res.send("This sevice will provides users access details");
});
app.listen(7000,()=>{console.log("accessDetails server is running on port:7000");});
