module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'cpf', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'cpf');
  },
};
