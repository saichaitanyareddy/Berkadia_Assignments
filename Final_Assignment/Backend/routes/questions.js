var router=require('express').Router();
const Question=require('../models/questions');

router.get('/questions',(req,res)=>{
        Question.where('qid', req.query.qid).fetch().then(function(result) {
        res.send(result.toJSON());
    }).catch(function(err) {
        console.error(err);
    });
});
module.exports=router;