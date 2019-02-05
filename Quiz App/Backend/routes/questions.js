const express = require('express');
const router = express.Router();
const questions=require('../models/questions');

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

router.get('/questions', (req, res) => {
    questions.find().then((result) => {
        response.data = result;
        res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    });
});

router.post("/addQuestion", (req, res) => { 
    //used for Adding new Questions into the database
    var myData = new questions(req.body);   
    myData.save()
        .then(item => {
            res.json(myData);
        })
        .catch(err => {
            res.status(400).send("Unable to save city details to database");
        });
});

module.exports=router;