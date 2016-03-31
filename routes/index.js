var express = require('express');
var emp = require('../model/emp');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Validate employee for the app. */
router.post('/api/validateEmp', function(req, res, next) {
    var employeeId = req.body.empid;
    var employeePass = req.body.empPass;
    emp.findOne({empId: employeeId}, function(err, empData){
        if(!err) {
            return res.json({success: true, data: empData})
        } else {
            return res.json({success: false, data: err})
        }
    })
});

/* Validate employee for the app. */
router.get('/api/getEmp', function(req, res, next) {
    var employeeId = req.query('empid');
    emp.findOne({empId: employeeId}, function(err, empData){
        if(!err) {
            return res.json({success: true, data: empData})
        } else {
            return res.json({success: false, data: err})
        }
    })
});


/* GET token page. */
router.get('/getToken', function(req, res, next) {
  res.render('getToken', { title: 'Express' });
});


module.exports = router;
