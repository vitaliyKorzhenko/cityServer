'use strict';
//user type!: ::::
// 1-superadmin full закрытая роль
// 2)  admin-institution
// 3) visitor
module.exports = {
    up: function (queryInterface, Sequelize) {
        return [
            queryInterface.addColumn('MobileUsers', 'role',
                {
                    type: Sequelize.STRING(),
                    allowNull: true
                }),
            queryInterface.addColumn('MobileUsers', 'full_user_id',
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'FullUsers',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                    unique: 'compositeIndex'
                })
        ];
    },

    down: function (queryInterface, Sequelize) {
    }
};
