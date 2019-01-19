var router=require('express').Router();
const knex=require('../config/kenx');
const result=require('../models/result');
router.post('/result',(req,res)=>{
    knex.raw(`insert into result values(${req.body.qid},'${req.body.selected}','${req.body.result}',${req.body.marks})`).then((result)=>{
        res.send(result);
    }).catch((err) => {
         console.log( err); 
         throw err 
    });
});
router.get('/result',(req,res)=>{
    result.fetchAll().then(function(result) {
    res.send(result.toJSON());
}).catch(function(err) {
    console.error(err);
});
});

module.exports=router;