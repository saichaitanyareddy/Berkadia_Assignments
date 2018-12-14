const express=require('express');
const app=express();
const router=express.Router();


app.use('/users',router);
router.get('/:id',(req,res,next)=>{      
    if(req.params.id>=3 && req.params.id<20)
    {
        next();
    }
    else{
        res.sendStatus(401);
    }
}, function (req, res, next) {
  console.log('Welcome to User');
  res.send("Hello User");
  next();
});

app.get('/',(req,res)=>{
    res.send("Router level Middleware example");
});

app.listen("3000",(req,res)=>{console.log("application is running on port:3000");});
