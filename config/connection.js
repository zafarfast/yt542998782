require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecommerce_db', '<Your SQL username>', '<Your SQL password>', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
