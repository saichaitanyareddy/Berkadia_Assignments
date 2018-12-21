const express=require('express');
var router=express.Router();
var http=require('http');

router.get('/login',(req,res)=>{
    http.get({
        host:'localhost',
        port:5000,
        path:req.originalUrl,
    },(resp)=>{
        let data='';
        resp.on('data',(chunk)=>{
            data+=chunk;
        });
        resp.on('end',()=>{
            res.send(data);
        });
    
    }).on('error',(err)=>{
        console.log('Error:'+ err.message);
    });

});
module.exports = router;