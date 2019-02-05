const mongoose=require('../config/mongoose');
const questionsSchema=new mongoose.Schema({
    qid:Number,
    question:String,
    option_1:String,
    option_2:String,
    option_3:String,
    option_4:String,
    answer:String
});
const Questions=mongoose.model('questions',questionsSchema);
module.exports=Questions;