'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('cars',
      {
        id:{
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
        },
        model: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'users',
            key: 'id'
          }
        }
    });
},

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars');
  }
};
