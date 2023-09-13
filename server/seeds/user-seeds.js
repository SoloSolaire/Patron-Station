const sequelize = require('../config/connection');
const { User } = require("../models");

const userData = [
  { 
    username: 'Test username',
    email: 'testemail@gmail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;