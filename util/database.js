const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize('clash-royale-cards', 'root', 'mastery9967', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
