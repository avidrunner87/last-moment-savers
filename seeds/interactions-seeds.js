const { Interactions } = require('../models');

const interactionsData = [
  {
    id: "Superbowl Party",
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022

  },
  {
    id: "Superbowl Party",
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: "Superbowl Party",
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: "Superbowl Party",
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: "Superbowl Party",
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: "Superbowl Party",
    role: "Host",
    created_at: 02-09-2022,
    updated_at:02-05-2022
  },
];

const seedInteractions = () => Comment.bulkCreate(interactionsData);

module.exports = seedInteractions;