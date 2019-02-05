const mongoose=require('../config/mongoose');
const resultsSchema=new mongoose.Schema({
    name:String,
    percentage:Number
});
const Results=mongoose.model('results',resultsSchema);
module.exports=Results;