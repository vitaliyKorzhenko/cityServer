var promise = require('promise');

var Institution = require('../db/models').Institution;


function InstitutionController() {

}



InstitutionController.prototype.getAllInstitutions = function (limit, cb) {
    console.log('мы таки в контроллере');
    Institution.findAll({raw:true}).then(function (institutions) {
        console.log("all institutions");
        console.log(institutions);
        return cb(null, institutions);
    }).catch(function (err) {
        return cb(err);
    });
}


InstitutionController.prototype.findInstitutionsByName = function (name, cb) {
    console.log('мы таки в контроллере');
    Institution.findAll(
        {
            where: {
                name: name
            },
            raw: true
        }
    ).then(function (institutions) {
        console.log("all institutions");
        console.log(institutions);
        if (institutions && institutions.length > 0 ) {
            return cb(null, institutions);
        } else {
            return cb('нахуй пошел нет такого заведения, иди чекни свой мозг животное');
        }
    }).catch(function (err) {
        return cb(err);
    });
}






InstitutionController.prototype.createInstitution = function (institution) {

    return new Promise (function (resolve, reject) {
        Institution.create({
            name: institution.name,
            address: institution.address,
            phone: institution.phone
        }).then(function (createdInstitution) {
            if (createdInstitution) {
                resolve(createdInstitution);
            }

        }, function (error) {
            reject(error);
        })
    })
}

module.exports = new InstitutionController();