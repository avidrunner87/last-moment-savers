const { Users } = require('../models');

const usersData = [
  {
    id: "Cody Markham",
    first_name: "Cody",
    last_name: "Markham",
    email: "cody@gmail.com",
    password: "ADKVP53K"
  },
  {
    id: "Anthony Cromartie",
    first_name: "Anthony",
    last_name: "Cromartie",
    email: "anthony@gmail.com",
    password: "DAGJ980G"
  },
  {
    id: "Robert Wilson",
    first_name: "Robert",
    last_name: "Wilson",
    email: "robert@gmail.com",
    password: "HDGJ6KJP"
  },
  {
    id: "Andrew Ronchetto",
    first_name: "Andrew",
    last_name: "Ronchetto",
    email: "andrew@gmail.com",
    password: "KJ23KPO"
  },
  {
    id: "Autumn Markham",
    first_name: "Autumn",
    last_name: "Markham",
    email: "autumn@gmail.com",
    password: "NJj6KNP"
  }
];

const seedUsers = () => Users.bulkCreate(usersData, {
  individualHooks: true,
  returning: true,

});

module.exports = seedUsers;