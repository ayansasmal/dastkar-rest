/**
 * Created by ayan on 6/28/15.
 */
var http=require('http');
var refDataService = {};

refDataService.getAdminRoles = function () {
    return http.get('adminRoles.json');
};


refDataService.verifyUser = function (userData) {
    var user = new dataModel.user({
        name: userData.name,
        loginId: userData.loginId,
        password: userData.password,
        roles: userData.roles,
        lastLogin: new Date()
    });
    console.log('User object to be added', user);
    user.save(function (err) {
        if (err) {
            console.log('User cannot be saved', err);
        } else {
            console.log('User successfully saved');
        }
    });
};
module.exports=refDataService;