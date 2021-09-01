const { Sequelize, DataTypes } = require('sequelize');
const { Interactions } = require('../models');
const { uuid } = require('uuidv4')

const interactionsData = [
  {
    id: uuid(),
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022

  },
  {
    id: uuid(),
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: uuid(),
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: uuid(),
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: uuid(),
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: uuid(),
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
];

const seedInteractions = () => Interactions.bulkCreate(interactionsData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedInteractions;