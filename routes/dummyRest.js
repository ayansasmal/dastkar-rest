var express = require('express');
var router = express.Router();
console.log('Loading REST API');
var userRoute = require('../server/dummyRest/userService/userRoute');
var refData = require('../server/dummyRest/refData/refDataRoute');
router.use(function(req, res, next) {
    console.log('rest router use: ', req.method, req.url);
    next();
});

/* GET views listing. */
router.get('/', function(req, res, next) {
    console.log('in rest /');
    res.send('ha ha ha reached rest');
});

router.use('/user', userRoute);
router.use('/refData', refData);

/*router.get('/assessment/addQuestion', function (req, res, next) {
    res.send('adding assessment');
});*/
//app.use('/rest', router);

module.exports = router;