/**
 * Created by Ayan Sasmal on 5/16/2015.
 */
var dataModel = require('./model');
var userService = {};

userService.addUser = function(userData) {
    var user = new dataModel.user({
        firstName: userData.firstName,
        lastName: userData.lastName,
        userName: userData.userName,
        emailId: userData.emailId,
        password: userData.password,
        roles: userData.roles,
        lastLogin: new Date()
    });
    console.log('User object to be added', user);
    return user.save();
};


userService.verifyUser = function(userData) {
    var user = new dataModel.user({
        firstName: userData.firstName,
        lastName: userData.lastName,
        userName: userData.userName,
        emailId: userData.emailId,
        password: userData.password,
        roles: userData.roles,
        lastLogin: new Date()
    });
    console.log('User object to be added in verifyUser', user);

    if (user.userName == 'ayansasmal' && user.password == 'sasmal') {
        return { name: "ayan", emailId: "ayandelhi@gmail.com", operation: "userLogin", loginId: user.userName, status: "success", message: "Login Successful!", code: "0", authKey: "123123" };
    } else {
        return { operation: "userLogin", loginId: user.userName, status: "failure", message: "Incorrect username or password. Please verify and try again!", code: "1" };
    }
    /*user.save(function (err) {
        if (err) {
            console.log('User cannot be saved', err);
        } else {
            console.log('User successfully saved');
        }
    });*/
    //{user:"ayansasmal", pass:"sasmal"}
};

userService.validateUsername = function(userData) {
    console.log('User object to be validated in validateUsername', userData);
    return dataModel.user.findOne({ userName: userData.userName }).exec();
};
module.exports = userService;