// var FullUsersSchema = require(global.ROOT_FOLDER + '/db/models/fulluser');
var models = require(global.ROOT_FOLDER + '/db/models');
var FullUsersSchema  = models.FullUser;
var MobileUsersSchema = models.MobileUser;

exports.getAllUsers = function (data, cb) {
    if (!data.login) {
        return cb('пошел нахуй без логина. парень');
    }
    if (!data.password) {
        return cb('утка что там по паролю! Альо давай пароль');
    };
    MobileUsersSchema.findOne({
        where: {
            enabled: true,
            login: data.login,
            password: data.password,
            role: 'super_admin'
        }
    }).then(function (mobUser) {
        if(mobUser) {
            FullUsersSchema.findAll({
                raw:true
            }).then(function (users) {
                return cb(null, users);
            }).catch(function (reason) {
                return cb(reason);
            });
        } else {
            return cb('пошел нахуй ты не мой кент, че тебе надо а а ?');
        }
    });

}


exports.login = function (data, cb) {
    if (!data.login) {
        return cb('пошел нахуй без логина. парень');
    }

    if (!data.password) {
        return cb('утка что там по паролю! Альо давай пароль');
    };
    MobileUsersSchema.findOne({
        where: {
            enabled: true,
            login: data.login,
            password: data.password
        }
    }).then(function (mobUser) {
        if(mobUser) {
            if (mobUser.status === 'Online') {
                return cb('хей мэн ты уже online не беси меня')
            }
            else {
             mobUser.update({status: 'Online'}).then(function () {
                 return cb(null, '')
             })
            }
        } else {
            return cb('пошел нахуй ты не мой кент, че тебе надо а а ?');
        }
    });

}