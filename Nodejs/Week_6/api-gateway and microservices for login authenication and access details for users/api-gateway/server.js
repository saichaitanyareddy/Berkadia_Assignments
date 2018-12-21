const express=require('express');
const app=express();
var router =express.Router();
app.use(router);
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb;"}));
var login=require('./loginService');
router.use(login);
app.get('/',(req,res)=>{
    res.send("Enter user details as query similar to below example: /login?username=____&password=____");
});
app.listen(3000,()=>{console.log("api-gateway running on port:3000");});