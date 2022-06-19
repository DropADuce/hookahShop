require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5252;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log('Работает!!!'));
  } catch (error) {
    console.log(error);
  }
};

start();
