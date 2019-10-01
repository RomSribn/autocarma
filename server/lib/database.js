const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  `${config.db_config.dbName}`,
  `${config.db_config.dbUserName}`,
  `${config.db_config.dbPassword}`,
  {
    host: `${config.db_config.dbHost}`,
    dialect: `${config.db_config.dbDialect}`,
  },
);


module.exports = sequelize;
