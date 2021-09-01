const seedUsers = require('./user-seeds');
const seedEvents = require('./event-seeds');
const seedInteractions = require('./interactions-seeds');
const seedPlans = require('./plans-seeds');
const seedTodos = require('./todos-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS SEEDED -----\n');

  await seedInteractions();
  console.log('\n----- INTERACTIONS SEEDED -----\n');

  await seedPlans();
  console.log('\n----- PLANS SEEDED -----\n');

  await seedTodos();
  console.log('\n----- TODOS SEEDED -----\n');

  process.exit(0);
};

seedAll();