var router=require('express').Router();
const Result=require('../models/results');

router.get('/results',(req,res)=>{
        Result.where('sid', req.query.sid).fetch().then(function(result) {
        res.send(result.toJSON());
    }).catch(function(err) {
        console.error(err);
    });
});
module.exports=router;