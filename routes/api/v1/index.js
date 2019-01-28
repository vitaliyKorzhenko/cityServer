'use strict';

var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    /*jshint unused:false*/
    res.render('index', {title: 'Express'});
});

router.use('/users', require('./v1/users'));

module.exports = router;