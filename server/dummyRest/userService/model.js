/**
 * Created by Ayan Sasmal on 5/16/2015.
 */
var mongoose = require('mongoose');
var dataModel = {};

dataModel.user = mongoose.model("User", {
    firstName: String,
    lastName: String,
    userName: String,
    emailId: String,
    password: String,
    roles: [String],
    lastLogin: String
});

module.exports = dataModel;