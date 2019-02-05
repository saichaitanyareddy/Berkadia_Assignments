const express = require('express');
const router = express.Router();
const results=require('../models/results');

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

router.get('/results', (req, res) => {
    results.find().then((result) => {
        response.data = result;
        res.json(response);
    })
    .catch((err) => {
        sendError(err, res);
    });
});
router.post("/result", (req, res) => {
    //used for storing results into database
    var myData = new results(req.body);   
    myData.save()
        .then(item => {
            res.json(myData);
        })
        .catch(err => {
            res.status(400).send("Unable to save city details to database");
        });
});

module.exports=router;