// var async = require('async');
//
// var InstitutionSchema = require('../db/models').Institution;
//
// var UserSchema = require('../db/models').User;
//
// var DealSchema = require('../db/models').Deal;
//
// var VisitSchema = require('../db/models').Visit;
//
// function VisitController() {
//
// }
//
// VisitController.prototype.getDeal = function (req, res, next ) {
//         //toDO: by api
//
// }
//
//
// function getUserByUUID(data) {
//     var response = {};
//     return function (cb) {
//         UserSchema.findOne({
//             where: {
//                 uuid: data.uuid
//             },
//             attributes: ['id'],
//             raw: true
//         }).then(function (value) {
//             if (value) {
//                response.userId = id;
//                return cb(null, data, response);
//             } else {
//                 return (new Error('user not found!!'));
//             }
//         }).catch(function (reason) {
//            return cb(new Error(reason));
//         });
//     }
// }
//
// function getInstitutionID(data, response, cb) {
//     InstitutionSchema.finOne({
//        where: {
//            name: data.institutionName
//        },
//        attributes: ['id'],
//        raw: true
//     }).then(function (value) {
//         if (value) {
//             response.instutionId = value;
//             return cb(null, data, response);
//         } else {
//
//         }
//     }).catch(function (reason) {
//         return cb(new Error(reason));
//     });
// }
//
// function getDealId(data, response, cb) {
//     DealSchema.findOne({
//         where: {
//             name: data.dealName
//         }
//     }).then(function (value) {
//         if (value) {
//             response.dealId = value;
//             return cb(null, data, response);
//         } else {
//             return cb(new Error('deal not found'));
//         }
//     }).catch(function (reason) {
//        return (new Error(reason));
//     });
// }
//
// function visitCreate(data, response, cb) {
//     VisitSchema.create({
//         userId: response.userId,
//         institutionId: response.instutionId,
//         dealId: response.dealId
//     }).then(function (visitInctance) {
//         return (null, visitInctance);
//     }).catch(function (reason) {
//        return cb(new Error(reason));
//     });
// }
//
// VisitController.prototype.visit = function (data, callback) {
//     if (data) {
//         if (!data.uuid) {
//             return callback(new Error('uuid not found!'));
//         }
//         if (!data.institutionName) {
//             return callback(new Error('institution name not found'));
//         }
//         if (!data.idDeal) {
//             return callback(new Error(('deal id not found')));
//         }
//         async.waterfall([
//             getUserByUUID(data),
//             getInstitutionID,
//             getDealId,
//             visitCreate
//         ], function (err, visit) {
//             // result now equals 'done'
//             if (err) {
//                 return callback(err);
//             }
//             return callback(null, visit);
//         });
//     } else {
//         return callback(new Error('data empty!'));
//     }
// }
//
// module.exports = new VisitController();