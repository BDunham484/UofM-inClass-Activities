require('dotenv').config()
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  'root',
  process.env.PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
