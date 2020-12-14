module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [{
          id: 1,
          nameuser: 'Yulia',
          email: 'ulia.ledy@gmail.com',
          password: 'qwerty'
      }]);

      await queryInterface.bulkInsert('cars', [{
          model: 'bmw',
          user_id: 1,
      }]);
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
      await queryInterface.bulkDelete('cars', null, {});
  }
};