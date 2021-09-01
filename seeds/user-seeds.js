const { Sequelize, DataTypes } = require('sequelize');
const { Users } = require('../models');
const { uuid } = require('uuidv4');

const usersData = [
  {
    id: uuid(),
    first_name: "Cody",
    last_name: "Markham",
    email: "cody@gmail.com",
    password: "12345"
  },
  {
    id: uuid(),
    first_name: "Anthony",
    last_name: "Cromartie",
    email: "anthony@gmail.com",
    password: "12345"
  },
  {
    id: uuid(),
    first_name: "Robert",
    last_name: "Wilson",
    email: "robert@gmail.com",
    password: "12345"
  },
  {
    id: uuid(),
    first_name: "Andrew",
    last_name: "Ronchetto",
    email: "andrew@gmail.com",
    password: "12345"
  },
  {
    id: uuid(),
    first_name: "Autumn",
    last_name: "Markham",
    email: "autumn@gmail.com",
    password: "12345"
  }
];

const seedUsers = () => Users.bulkCreate(usersData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;