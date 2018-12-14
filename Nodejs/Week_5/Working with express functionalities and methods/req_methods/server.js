const express=require('express');
const app=express();
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
const employees=require('./employees.json');
var cookie=require('cookie-parser');
var cookie_secret=require('cookie-parser');
app.use(cookie('secret'));


app.get('/',(req,res)=>{
    console.log(req.fresh);
    console.log(req.stale);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.subdomains);
    console.log(req.xhr);
    res.cookie('home_page', 'user details', { expires: new Date(Date.now() + 90000), httpOnly: true});
    res.cookie('secret_cookie','Sai chaitanya Reddy',{ expires: new Date(Date.now() + 90000), httpOnly: true,signed:true});
    res.send("Welcome to Node");
});

app.get('/india/Andhrapradesh',(req,res,next)=>{
    console.log(req.originalUrl); 
    console.log(req.baseUrl); 
    console.log(req.path);
    console.log(req.query.city);
    console.log(req.route);
    console.log(req.param('city'));
    next();
});

app.get('/employees/:emp_id',(req,res)=>{
    console.log(req.params.emp_id);
    console.log('Cookies: ', req.cookies);
    console.log('signedCookies:',req.signedCookies);
    res.json(employees.find(x=>x.emp_id==req.params.emp_id));
});
app.post('/employees',(req,res)=>{
    let body=req.body;
    console.log(req.accepts('application/json'));
    
    let index=employees.findIndex(x=>x.emp_id==body.emp_id)
    if(index===-1){
        employees.push(body)
    }
    else{
        employees[index]=body;
    }
    console.log(req.body);
    console.log(req.get('Content-Type'));
    console.log(req.is('application/json'));
    res.json(body.emp_id);
});
app.put('/employees/:emp_id',(req,res)=>{
    let body=req.body;
    let index=employees.findIndex(x=>x.emp_id==req.params.emp_id)
    employees[index].name=body.name;
    res.json(employees[index]);
});
app.delete('/employees/:emp_id',(req,res)=>{
    let s=employees.findIndex(x=>x.emp_id==req.params.emp_id);
    employees.splice(s,1);
});

app.listen("3000");