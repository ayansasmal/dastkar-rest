var express = require('express');
var router = express.Router();
console.log('Loading NodeServer configuration');

router.use(function(req, res, next){
    console.log('default router use: ',req.method, req.url);
    next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('in default');
    res.render('default', {title: 'Node Server'});
    //next();
});

module.exports = router;
