const express=require('express');
const app=express();
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
var cookie=require('cookie-parser');
app.use(cookie('secret'));
const employees=require('./employees.json');



app.get('/',(req,res)=>{
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
    res.cookie('home_page', '1', { expires: new Date(Date.now() + 90000), httpOnly: true,signed: true});
    console.log(res.headersSent);
    res.send("Welcome to Node");
    console.log(res.headersSent);
    res.end();
    
});

app.get('/view',(req,res)=>{
    res.cookie('name', 'tobi', { path: '/view' });
    res.clearCookie('name', { path: '/view' });
    res.location('/view');
    res.send(200).send("Welcome to Node");
    
});

app.get('/image',(req,res)=>{
    res.type('png');
    res.attachment('/pic.png');
    res.send("image will be downloaded");
});

app.get('/viewFile',(req,res)=>{
    res.sendFile('/Node/Working_express/res_methods/server.js');
});

app.get('/download',(req,res)=>{
    res.download('/Node/Working_express/res_methods/sample.jpg');
});

app.get('/redirect',(req,res)=>{
    res.redirect('https://vardhaman.org');
});


app.get('/employees/:emp_id',(req,res)=>{
    console.log(req.params.emp_id);
    res.set('Content-Type', 'application/json');
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

    res.format({
        'application/json': function(){
            res.json(body.emp_id);
        },
      
        'default': function() {
         
          res.status(406).send('Not Acceptable');
        }
      });

    console.log(res.get('Content-Type'));
   
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

app.listen("3000",()=>{console.log("server is listening on port:3000");});