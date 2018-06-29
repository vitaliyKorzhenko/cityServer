'use strict';

module.exports = {
    up : function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Categories', [{
            name : 'Burgers',
            description : 'burgers',
            enabled:true ,
            createdAt : new Date(),
            updatedAt : new Date(),
        }, {
            name : 'Pizza',
            description : '',
            enabled:true ,
            createdAt : new Date(),
            updatedAt : new Date(),
        },
            {
                name : 'Sushi',
                description : '',
                enabled:true ,
                createdAt : new Date(),
                updatedAt : new Date(),
            },
            {
                name : 'Breakfast',
                description : '',
                enabled:true ,
                createdAt : new Date(),
                updatedAt : new Date(),
            },{
                name : 'Lunch',
                description : '',
                enabled:true ,
                createdAt : new Date(),
                updatedAt : new Date(),
            },
            {
                name : 'Dinner',
                description : '',
                enabled:true ,
                createdAt : new Date(),
                updatedAt : new Date(),
            },
            {
                name : 'Hookah',
                description : '',
                enabled:true ,
                createdAt : new Date(),
                updatedAt : new Date(),
            },
            {
                name : 'Pub',
                description : '',
                enabled:true ,
                createdAt : new Date(),
                updatedAt : new Date(),
            },
            {
                name : 'Steaks',
                description : '',
                enabled:true ,
                createdAt : new Date(),
                updatedAt : new Date(),
            }
        ], {});

    },

    down : function (queryInterface, Sequelize) {
        queryInterface.bulkDelete('Categories', [{
            name : 'Steaks'
        }]);
    }
};
