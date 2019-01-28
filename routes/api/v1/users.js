var express = require('express'),
    userController = require(global.ROOT_FOLDER + '/controllers/UserController'),
    router = express.Router();


function defaultParseRequest() {

}

router.get('/', function (req, res, next) {
    console.log("===faccsdfds");
    /*jshint unused:false*/
    res.json({
        status: 'success',
        message: 'где тут бы еще юзеры были',
        data: {}
    });
});

router.post('/getAllUsers', function (req, res, next) {
    console.log("===faccsdfds");
    console.log("-=-ohohoh body");
    console.log(JSON.stringify(req.body));
    if (!req.body) {
        res.json({
            status: 'fail',
            message: 'ты проебал тело запроса,мудак. Соберись!',
            data: {}
        });
    }
    userController.getAllUsers(req.body, function (err, users) {
        console.log(err);
       if (err) {
           res.json({
               status: 'fail',
               message: err,
               data: {}
           });
       } else {
           res.json({
               status: 'success',
               message: 'здарова братишка, пивка для рывка, вот юзеры лови',
               data: users
           });
       }
    });
});


module.exports = router;