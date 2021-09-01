const { Todos } = require('../models');

const todosData = [
  {
    id: "Superbowl!",
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: "Superbowl!",
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: "Superbowl!",
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  {
    id: "Superbowl!",
    title:Football,
    description: "Watching the Game!", 
    due_date:02-09-2022,
    status: "Good",
    created_at:02-09-2022,
    updated_at:02-05-2022
  },
  
];

const seedTodos = () => Comment.bulkCreate(todosData);

module.exports = seedtodos;