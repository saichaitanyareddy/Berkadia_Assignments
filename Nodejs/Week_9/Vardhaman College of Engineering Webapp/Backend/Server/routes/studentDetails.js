var router=require('express').Router();
const redis=require('redis');
const knex=require('../config/kenx');
const students=require('../models/students');
var client=require('../config/redis');
let response;
let key;

router.post('/students',(req,res)=>{
    knex.raw(`insert into studentsdetails values('${req.body.sid}','${req.body.sname}',${req.body.bid},${req.body.phone})`).then((result)=>{
        res.send(result);
    }).catch((err) => {
         console.log( err); 
         throw err 
    });
});
router.get('/students',(req,res)=>{
    if(key==req.query.sid){
        client.get(key,function(error,result){
            if(error){
                console.log(error);
                throw error;
            }
            if(result){
                res.send(JSON.parse(result));
            }
        });
    }
    else{
        students.forge().where({sid:req.query.sid}).fetchAll({withRelated:['fk']}).then(function(user) {
            key=req.query.sid;
            response=user.toJSON();
            res.send(response);
            client.set(key,JSON.stringify(response),redis.print);
        }).catch(function(err) {
            console.error(err);
        });
    }
});

module.exports=router;