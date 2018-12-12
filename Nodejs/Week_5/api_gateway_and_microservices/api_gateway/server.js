var express = require('express');
var app = express();
var router = require('./routers/router');
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway is Running")
})
app.use(router);

console.log("Simple API Gateway run on localhost:3000")

app.listen(3000);