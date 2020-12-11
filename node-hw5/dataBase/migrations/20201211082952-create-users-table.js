module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',
    {
      id:{
         type: Sequelize.DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey:true
      },
      nameuser: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
