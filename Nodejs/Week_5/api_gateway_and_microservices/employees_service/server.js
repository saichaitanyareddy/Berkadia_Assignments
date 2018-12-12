var express = require('express');
const app=express();
var employees=require('./employees.json');
var router = express.Router()
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(router);

router.get('/employees/:emp_id',(req,res)=>{
    console.log(req.params.emp_id)
    res.json(employees.find(x=>x.emp_id==req.params.emp_id));
});
router.post('/employees',(req,res)=>{
    let body=req.body;
    let index=employees.findIndex(x=>x.emp_id==body.emp_id)
    if(index===-1){
        employees.push(body)
    }
    else{
        employees[index]=body;
    }
    
    res.json(body.emp_id);
});

router.put('/employees/:emp_id',(req,res)=>{
    let body=req.body;
    let index=employees.findIndex(x=>x.emp_id==req.params.emp_id)
    employees[index].name=body.name;
    res.json(employees[index]);
});

router.delete('/employees/:emp_id',(req,res)=>{
    let s=employees.findIndex(x=>x.emp_id==req.params.emp_id);
    let result=employees.splice(s,1);
    res.json(result);
});

app.get('/',(req,res)=>{
    res.send("This server will allow users to perform get/post/put/delete on employee data");
})

app.listen("5000",()=>{console.log("server is listening on port:5000");})
