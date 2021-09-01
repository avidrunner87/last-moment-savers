const { Sequelize, DataTypes } = require('sequelize');
const { Plans } = require('../models');
const { uuid } = require('uuidv4')

const plansData = [
  {
    id: uuid(),
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: uuid(),
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: uuid(),
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: uuid(),
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: uuid(),
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: uuid(),
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
];

const seedPlans = () => Plans.bulkCreate(plansData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedPlans;