var express = require('express');
var jwt = require('jwt-simple');
var token = require('../model/token');
var emp = require('../model/emp');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET token page. */
router.get('/getToken', function(req, res, next) {
  res.render('getToken', { title: 'Express' });
});



var secret = 'forencodeing';

/* Creates Token using jwt */
router.post('/api/createTokenId', function(req, res, next) {    
    var employeeId = req.body.empEmail;
    var jwtData = {email:employeeId};
    // encode 
    var createdToken = jwt.encode(jwtData, secret);   
    console.log(employeeId,'employeeId','createdToken', token)
    var tokenData = token({tokenId: createdToken, email: employeeId})
    tokenData.save(function(err, tokenInfo){console.log(err, tokenInfo,'data to save')
        if(!err) {
            return res.json({success: true, data: tokenInfo})
        } else {
            return res.json({success: false, data: err})
        }
    })
});

/* get all the employees */
router.get('/api/getEmp', function(req, res, next) {
//    var tokenId = req.query('token');
//    var conditiontoGetEmp;
//    if(tokenId != '') {
//        conditiontoGetEmp = {}
//    } else {
//        conditiontoGetEmp = {}
//    }
    emp.find({}, function(err, empJson){
        if(!err) {
            return res.json({success: true, data: empJson})
        } else {
            return res.json({success: false, data: err})
        }
    })
});

/* get a particular employee info */
router.get('/api/getOneEmp', function(req, res, next) {
      var empid = req.query.empId;
    emp.findOne({id: empid}, function(err, empInfo){
        if(!err) {
            return res.json({success: true, data: empInfo});
        } else {
            return res.json({success: false, data: err});
        }
    })
});

/* create employee info */
router.post('/api/createEmp', function(req, res, next) {
      var empObj = {
        id: req.body.empId,
        email: req.body.email,
        name: req.body.name,
        tags: req.body.tags  
      }
    //return res.json('done')
    emp(empObj).save(function(err, empInfo){
        if(!err) {
            return res.json({success: true, data: empInfo});
        } else {
            return res.json({success: false, data: err});
        }
    })
});

/* update employee info */
router.post('/api/updateEmp', function(req, res, next) { 
    var empId = req.body.empId;
    var updateObj = {};
    var updateData;
    if(req.body.email) {
        updateObj.email = req.body.email;
    }
    if(req.body.name){
        updateObj.name = req.body.name;
    }
    if(req.body.tags.length > 0){
        //updateObj.tags.req.body.tags;
        updateData = {$set:updateObj, $addToSet:{tags: req.body.tags }};
    } else {
        updateData = {$set:updateObj}
    } 
      emp.update({id:empId}, updateData, function(err, empUpdate){
        if(!err) {
            return res.json({success: true, data: empUpdate});
        } else {
            return res.json({success: false, data: err});
        }
    })
});

/* remove employee info */
router.get('/api/removeEmp', function(req, res, next) { 
    var empId = req.query.empId;     
      emp.remove({id:empId}, function(err, empRemoved){
        if(!err) {
            return res.json({success: true, data: empRemoved});
        } else {
            return res.json({success: false, data: err});
        }
    })
});


module.exports = router;
