var express = require('express'),
    institutionController = require(global.ROOT_FOLDER + '/controllers/InstitutionController'),
    router = express.Router();


function defaultParseRequest() {

}

router.get('/', function (req, res, next) {
    console.log("===faccsdfds");
    /*jshint unused:false*/
    res.json({
        status: 'success',
        message: 'йо что тебе нужно???? ааа??',
        data: {}
    });
});


router.post('/findInstitutionsByName', function(req, res, next) {
    console.log('-----body--------');
    console.log(req.body);
    institutionController.findInstitutionsByName(req.body.name, function(err, institutions) {
        console.log('что по жизни');
        console.log(institutions);
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
               message: 'здарова братишка, пивка для рывка, вот заведения лови',
               data: institutions
           });
       }
    });
})


router.get('/getAllInstitutions', function (req, res, next) {
    console.log("===faccsdfds");
    console.log("-=-ohohoh body");
    institutionController.getAllInstitutions(100, function(err, institutions) {
        console.log('что по жизни');
        console.log(institutions);
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
               message: 'здарова братишка, пивка для рывка, вот заведения лови',
               data: institutions
           });
       }
    });
});


module.exports = router;