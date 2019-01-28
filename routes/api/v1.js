'use strict';
var express = require('express'),
    router = express.Router();
router.get('/', function (req, res, next) {
    console.log("========lol ======= get =====");
    /*jshint unused:false*/
    res.json({
        status: 'success',
        message: '',
        data: {}
    });
});

router.use('/users', require('./v1/users'));
router.use('/institutions', require('./v1/institution'));
module.exports = router;