const express=require('express');
const app=express();
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
const employees=require('./employees.json');

app.locals.title="Express Methods";
app.locals.email="saichaitanya338@gmail.com";

console.log(app.locals.title);
console.log(app.locals.email);

var admin = express(); //sub app

admin.on('mount', function (parent) {
    console.log('Admin Mounted');
    console.log(parent); // refers to the parent app
  });

admin.get('/', function (req, res,next) {
  console.log(admin.mountpath); 
  res.send('Admin Homepage');
  next();
});

app.use(['/admin','/system'], admin);

console.log(app.path());
console.log(admin.path());

app.get('/',(req,res)=>{
    console.log(req.app);
    res.send("Welcome to Node");
});


app.get('/employees/:emp_id',(req,res)=>{
    console.log(req.params.emp_id)
    res.json(employees.find(x=>x.emp_id==req.params.emp_id));
});
app.post('/employees',(req,res)=>{
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

app.disable('case sensitive routing');
console.log(app.get('case sensitive routing'));
console.log(app.disabled('case sensitive routing'));
app.enable('case sensitive routing');
console.log(app.get('case sensitive routing'));
console.log(app.enabled('case sensitive routing'));

app.param('id',(req,res,next,id)=>{
    if(id=='1')
    {
        res.send("Hello sai");
        next();
    }
    else{
        res.sendStatus(404);
    }
})
app.get('/user/:id', function (req, res, next) {
  console.log('although this matches');
  next();
});

app.route('/berkadia/:user_id').all((req,res,next)=>{
 
    res.send("Welcome to Berkadia \n your id number is"+req.params.user_id);
    next();
});

app.set('case sensitive routing',false);
console.log(app.get('case sensitive routing'));

app.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});


app.all('*',(req,res)=>{
    console.log("This is logged using app.all");
    res.end("Hello Node");
});


app.listen("3000",()=>{console.log("Server is listening on port:3000");});