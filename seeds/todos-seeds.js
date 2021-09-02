const { Todos } = require('../models');
const { uuid } = require('uuidv4');

const todosData = [
    {
        id: uuid(),
        title: 'Football',
        description: 'Watching the Game!',
        due_date: '2022-02-09',
        status: 'Good',
        created_at: '2022-02-09',     //  02 - 09 - 2022
        updated_at: '2022-02-05',      //  02 - 05 - 2022
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10", //DUMMY UUID USER
        plans_id: 'test-this-plan' //DUMMY UUID PLAN 
    },
    {
        id: uuid(),
        title: 'Football',
        description: 'Watching the Game!',
        due_date: '2022-02-09',
        status: 'Good',
        created_at: '2022-02-09',     //  02 - 09 - 2022
        updated_at: '2022-02-05',      //  02 - 05 - 2022
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10", //DUMMY UUID USER
        plans_id: 'test-this-plan' //DUMMY UUID PLAN 
    },
    {
        id: 'test-this-todo',
        title: 'Football',
        description: 'Watching the Game!',
        due_date: '2022/02/09',
        status: 'Good',
        created_at: '2022-02-09',     //  02 - 09 - 2022
        updated_at: '2022-02-05',      //  02 - 05 - 2022
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10", //DUMMY UUID USER
        plans_id: 'test-this-plan' //DUMMY UUID PLAN 
    },
    // {
    //     id: uuid(),
    //     title: 'Football',
    //     description: 'Watching the Game!',
    //     due_date: 2022/02/09,
    //     status: 'Good',
    //     created_at: 2022/02/09,     //  02 - 09 - 2022
    //     updated_at: 2022/02/05,      //  02 - 05 - 2022
    // }
];

const seedTodos = () =>
    Todos.bulkCreate(todosData, {
        individualHooks: true,
        returning: true
    });

module.exports = seedTodos;
