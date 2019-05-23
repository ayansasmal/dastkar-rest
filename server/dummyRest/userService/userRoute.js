/**
 * Created by Ayan Sasmal on 5/16/2015.
 */
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
console.log('user route configuration');

var userService = require('./userService');
router.use(function(req, res, next) {
    console.log('user router use: ', req.method, req.url);
    mongoose.connect('mongodb://mongo:27017/mydb');
    mongoose.Promise = Promise;
    next();
});


router.get('/', function(req, res) {
    res.send('{user:"ayansasmal", pass:"sasmal"}');
});

router.post('/login', function(req, res) {
    console.log('userObject ->', req.body);
    var response = userService.verifyUser(req.body);
    console.log(response);
    res.json(response);
});

router.post('/addUser', function(req, res) {
    console.log('userObject', req.body);
    var promise = userService.addUser(req.body);
    promise.then(function(savedUser) {
        var response = {};
        console.log('savedUser from DB ', savedUser);
        if (savedUser !== null) {
            response = prepareResponse("addUser", "success", "0", { userName: req.body.userName, message: "User successfully added" });
        } else {
            response = prepareResponse("addUser", "failure", "1", { userName: req.body.userName, message: "Failed to add user" });
        }
        console.log('response ', response);
        if (response.status === "success") {
            res.status(200).json(response);
        } else {
            res.status(200).json(response);
        }
    });
});

router.post('/validateUsername', function(req, res) {
    console.log('userObject', req.body);
    var promise = userService.validateUsername(req.body);
    promise.then(function(retrievedUser) {
        var response = {};
        console.log('retrievedUser from DB ', retrievedUser);
        if (retrievedUser === null) {
            response = prepareResponse("validateUsername", "success", "0", { userName: req.body.userName, message: "Username is available" });
        } else {
            response = prepareResponse("validateUsername", "failure", "1", { userName: req.body.userName, message: "Username is not available" });
        }
        console.log('response ', response);
        if (response.status === "success") {
            res.status(200).json(response);
        } else {
            res.status(200).json(response);
        }
    });

});

var prepareResponse = function(operation, status, statusCode, responseData) {
    return { operation: operation, status: status, code: statusCode, data: responseData };
};

//console.log('user route', router);


module.exports = router;
return router;