'use strict';

module.exports = {
    up : function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('FullUsers', [{
            firstName : 'Vitaliy',
            lastName : 'Korzhenko',
            enabled:true ,
            createdAt : new Date(),
            updatedAt : new Date(),
            email : 'vitaliykorzenkoua@gmail.com',
            phoneNumber: '066-994-76-51'
        }, {
            firstName : 'Alex',
            lastName : 'Langlitz',
            enabled:true ,
            createdAt : new Date(),
            updatedAt : new Date(),
            email : 'lagrant.int@gmail.com@',
            phoneNumber: '066-994-76-51'
        }], {});
    },

    down : function (queryInterface, Sequelize) {
        queryInterface.bulkDelete('FullUser', [{
            firstName :'Vitaliy'
        }]);
    }
};
