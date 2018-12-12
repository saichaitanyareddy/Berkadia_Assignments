var express = require('express');
var router = express.Router();
var employeesDetails= require('./employees_service');
var staticData= require('./static_service');
var authenticate=require('./authenticate');
router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})
router.use(authenticate);
router.use(employeesDetails);
router.use(staticData);

module.exports = router;
