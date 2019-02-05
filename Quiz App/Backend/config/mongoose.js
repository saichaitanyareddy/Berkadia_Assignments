const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/quiz',{useNewUrlParser:true}).then(()=>{console.log("connected to the database");});
module.exports=mongoose;