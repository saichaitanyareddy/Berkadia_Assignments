var router=require('express').Router();
var client=require('../config/elastic-search');

router.get('/search',(req,res)=>{
    client.search({  
        index: 'students',
        type: 'student',
        body: {
          query: {
            match: { "branch":req.query.bid }
          },
        }
    },function (error, response,status) {
          if (error){
            console.log("search error: "+error)
          }
          else {
            res.send(response.hits.hits);
          }
    });
});

module.exports=router;