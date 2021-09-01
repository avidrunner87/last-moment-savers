const { Sequelize, DataTypes } = require('sequelize');
const { Comments } = require('../models');
const { uuid } = require('uuidv4')

const commentsData = [
    {
        id: uuid(),
        body: 'Ill dust',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: uuid(),
        body: 'I will clean the dishes',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: uuid(),
        body: 'Ill sweep the kitchen',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: uuid(),
        body: 'Ill mop',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: uuid(),
        body: 'Ill fix the cushions',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
    ];

const seedComments = () => Comments.bulkCreate(commentsData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedComments;