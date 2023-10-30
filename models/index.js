const Sequelize = require('sequelize');

const sequelize = new Sequelize('library', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require('./books.js')(sequelize, Sequelize);

module.exports = db;
