var express = require('express');

var router = express.Router();
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:5000'
const api = apiAdapter(BASE_URL);

router.get('/employees/:emp_id', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    }).catch(err=>{
          console.log("error");
          res.send("Internal server was down");
      })
  })
router.post('/employees', (req, res) => {
    api.post(req.path,req.body).then(resp => {
      res.json(resp.data);
    }).catch(err=>{
          console.log("error");
          res.send("Internal server was down");
      })
  })
router.delete('/employees/:emp_id', (req, res) => {
    api.delete(req.path).then(resp => {
      res.send(resp.data)
    }).catch(err=>{
          console.log("error");
          res.send("Internal server was down");
      })
  })


  module.exports = router;