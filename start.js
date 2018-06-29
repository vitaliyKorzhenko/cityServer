var express = require('express');
var app = express();

var db = require('./db/models');

var port = 3000;

app.listen(port, function() {
    db.sequelize.sync();
    console.log('start good ! have fun! port now: ' + port);
});