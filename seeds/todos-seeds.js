const { Todos } = require('../models');
const { uuid } = require('uuidv4')

const todosData = [
  {
    id: uuid(),
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: uuid(),
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: uuid(),
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: uuid(),
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  
];

const seedTodos = () => Todos.bulkCreate(todosData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedTodos;

