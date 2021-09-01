const { Plans } = require('../models');

const plansData = [
  {
    id: "Clean!",
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: "Clean!",
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: "Clean!",
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: "Clean!",
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: "Clean!",
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
  {
    id: "Clean!",
    title: 'living room',
    created_at: 02-05-2022,
    updated_at:02-09-2022
  },
];

const seedPlans = () => Comment.bulkCreate(plansData);

module.exports = seedPlans;