const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize('clash-roayle-cards', 'root', 'mastery9967', {
  host: 'localhost',
  dialect: 'mysql2',
});

module.exports = sequelize;
