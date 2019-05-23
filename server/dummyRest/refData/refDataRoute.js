/**
 * Created by ayan on 6/28/15.
 */
var express = require('express');
var mongoose = require('mongoose');
var refDataService=require('./refDataService.js');
var router = express.Router();
console.log('refData router configuration');
router.use(function (req, res, next) {
    console.log('refData router use: ', req.method, req.url);
    //mongoose.connect('mongodb://localhost:27017/mydb');
    next();
});


router.get('/', function (req, res) {
    res.send('{status:"success", code:201, message:"Reached Ref Data Services"}');
});

router.get('/adminRoles', function (req, res){
   refDataService.getAdminRoles().then(function(response){
        console.log('getAdminRoles::', response);
       return response;
    });
});

//console.log('user route', router);


module.exports=router;
return router;