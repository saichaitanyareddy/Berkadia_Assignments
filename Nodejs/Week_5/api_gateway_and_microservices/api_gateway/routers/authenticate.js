var express = require('express');

var router = express.Router();
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:7000'
const api = apiAdapter(BASE_URL);

router.get('/login', (req, res) => {
    api.get(req.originalUrl).then(resp => {
      res.send(resp.data)
    }).catch(err=>{
          console.log("error");
          res.send("Internal server was down");
      })
  })

  module.exports = router; 