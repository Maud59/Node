module.exports = sequelize.define('users', {
      nom: {
            type: Sequelize.STRING,
            field: 'title',
            allowNull: false,
      },
      prenom: {
            type: Sequelize.STRING,
            field: 'title',
            allowNull: false,
      },
      email: {
            type: Sequelize.STRING,
            field: 'title',
            allowNull: false,
      },
      pass: {
            type: Sequelize.STRING,
            field: 'title',
            allowNull: false,
      }
});