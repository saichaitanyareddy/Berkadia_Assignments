var router=require('express').Router();
const knex=require('../config/kenx');

router.get('/branch',(req,res)=>{
    knex.raw(`select b.bid,b.bname,count(*) as count from node.branch as b left join node.studentsdetails as s on b.bid=s.bid  group by b.bname;`).then((result)=>{
        res.send(result[0]);
    }).catch((err) => { 
        console.log( err);
        throw err 
    });
});
module.exports=router;