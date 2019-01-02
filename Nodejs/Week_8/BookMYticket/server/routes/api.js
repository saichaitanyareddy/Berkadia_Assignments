const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/bookmyticket',{useNewUrlParser:true}).then(()=>{console.log("connected to mongoDB");});

const citiesSchema=new mongoose.Schema({
    name:String,
    no_of_theaters:Number,
    pincode:Number
});
const cities=mongoose.model('cities',citiesSchema);

const moviesSchema=new mongoose.Schema({
    name:String,
    Music:String,
    Producer:String,
    Director:String,
    Release_date:Date,
    Ratings:Number
});
const movies=mongoose.model('movies',moviesSchema);

const theaterSchema=new mongoose.Schema({
    name:String,
    location:String,
    cost_per_ticket:Number,
    now_playing:String,
    capacity:Number,
    Available_seats:Number,
    city:String
});
const theaters=mongoose.model('theaters',theaterSchema);

var nameSchema = new mongoose.Schema({
    username: String,
    email:String,
    phone:Number,
    movie_name:String,
    show_date:Date,
    show_time:String,
    No_of_tickets:Number,
    Amount_paid:Number,
    Theater_name:String,
    city:String
});
var Booking = mongoose.model("Booking_details", nameSchema);

let response = {
    status: 200,
    data: [],
    message: null
};

const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

router.get('/cities', (req, res) => {
    cities.find().then((result) => {
        response.data = result;
        res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    });
});
router.get('/movies', (req, res) => {
    movies.find({name:req.query.name}).then((result) => {
        response.data = result;
        res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    });
});
router.get('/theaters', (req, res) => {
    theaters.find({city:req.query.city}).then((result) => {
        response.data = result;
        res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    });
});

router.post("/book", (req, res) => {
    var myData = new Booking(req.body);
    myData.save()
        .then(item => {
            res.json(myData);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

router.put('/blockseats',(req,res)=>{
   theaters.findOneAndUpdate({name:req.body.Theater_name},{Available_seats:req.body.available}).then((result)=>{
       response.data=result;
       res.json(response);
   }).catch((err) => {
    sendError(err, res);
    });
});

module.exports = router;