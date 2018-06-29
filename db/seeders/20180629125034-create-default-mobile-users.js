'use strict';

module.exports = {
    up : function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('MobileUsers', [{
            login : 'blackGod',
            password : 'genby[etcjc2018',
            enabled:true ,
            role: 'super_admin',
            createdAt : new Date(),
            updatedAt : new Date(),

        }, {
            login : 'alex_l',
            password : 'Alex_l123alex_l',
            enabled:true ,
            role: 'super_admin',
            createdAt : new Date(),
            updatedAt : new Date(),
        }], {});
    },

    down : function (queryInterface, Sequelize) {
        queryInterface.bulkDelete('MobileUsers', [{
            login :'alex_l'
        }]);
    }
};
