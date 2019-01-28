global.ROOT_FOLDER = __dirname;

var express = require('express');
var app = express();

var db = require('./db/models');

var port = 3000;

var bodyParser = require('body-parser')


app.listen(port, function() {
    db.sequelize.sync();
    console.log('start good ! have fun! port  dsfdsf : ' + port);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res._response = function (result, status, code, message) {
        var output = {};
        output.statusCode = code || 200;
        output.statusMessage = message || 'success';
        output.status = status || 'success';
        output.response = result;
        res.json(output);
    };
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.get('/', function (req, res, next) {
    var output = {};
    output.statusCode = res.code || 200;
    output.statusMessage = res.message || 'Api is working fine';
    res.json(output).end();
});

app.use('/api/v1', require(global.ROOT_FOLDER + '/routes/api/v1'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        var response = {};
        response.statusCode = err.status || 500;
        response.statusMessage = err.statusMessage || err.message || err.stack || 'Unknown Error';
        response.errors = err.errors || '';
        response.status = 'fail';
        res.json(response);
    });
} else {
    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        var response = {};
        response.statusCode = err.status || 500;
        response.statusMessage = err.statusMessage || err.message || err.stack || 'Unknown Error';
        response.errors = err.errors || '';
        response.status = 'fail';
        res.json(response);
    });
}
module.exports = app;


