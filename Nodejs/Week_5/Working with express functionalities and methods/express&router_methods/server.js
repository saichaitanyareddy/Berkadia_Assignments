var express=require('express');
var employees=require('./employees.json');
var app=express();
var http = require('http');
var router=express.Router();
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html','txt'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  
app.use(express.static('public', options));
app.use(router);

router.get('/',(req,res)=>{
	res.send("Welcome to Node");
});
router.get('/well',(req,res)=>{
	res.send("Welcome to router");
});

/*
router.param(function(param, validator) {
    return function (req, res, next, val) {
      if (validator(val)) {
        next();
      }
      else {
        res.sendStatus(403);
      }
    }
  });
  
  router.param('id', function (candidate) {
    return !isNaN(parseFloat(candidate)) && isFinite(candidate);
  }); */
router.param('id',(req,res,next,id)=>{
      if(id=='1')
      {
          res.send("Hello sai");
          next();
      }
      else{
          res.sendStatus(404);
      }
})
router.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
});
  

router.route('/berkadia/:user_id').all((req,res,next)=>{
 
    res.send("Welcome to Berkadia \n your id number is"+req.params.user_id);
    next();
});


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
    employees.splice(s,1);
});


router.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

router.all('/*',(req,res)=>{
    
    console.log("Hello by router all");
    res.end("hello");
});
app.listen(5000);
console.log("welcome");
