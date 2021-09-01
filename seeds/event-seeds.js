const { Events } = require('../models');
const { uuid } = require('uuidv4');

const eventsData = [
    {
        id: uuid(),
        title: 3,
        start_date: 02 - 09 - 2022,
        end_date: 02 - 09 - 2022,
        description: uuid(),
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myfakesuperbowlparty.com',
        created_at: 02 - 05 - 2022,
        updated_at: 02 - 05 - 2022
    },
    {
        id: uuid(),
        title: 3,
        start_date: 02 - 09 - 2022,
        end_date: 02 - 09 - 2022,
        description: uuid(),
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myfakesuperbowlparty.com',
        created_at: 02 - 05 - 2022,
        updated_at: 02 - 05 - 2022
    },
    {
        id: uuid(),
        title: 3,
        start_date: 02 - 09 - 2022,
        end_date: 02 - 09 - 2022,
        description: uuid(),
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myfakesuperbowlparty.com',
        created_at: 02 - 05 - 2022,
        updated_at: 02 - 05 - 2022
    },
    {
        id: uuid(),
        title: 3,
        start_date: 02 - 09 - 2022,
        end_date: 02 - 09 - 2022,
        description: uuid(),
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myfakesuperbowlparty.com',
        created_at: 02 - 05 - 2022,
        updated_at: 02 - 05 - 2022
    },
    {
        id: uuid(),
        title: 3,
        start_date: 02 - 09 - 2022,
        end_date: 02 - 09 - 2022,
        description: uuid(),
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myfakesuperbowlparty.com',
        created_at: 02 - 05 - 2022,
        updated_at: 02 - 05 - 2022
    },
    {
        id: uuid(),
        title: 3,
        start_date: 02 - 09 - 2022,
        end_date: 02 - 09 - 2022,
        description: uuid(),
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myfakesuperbowlparty.com',
        created_at: 02 - 05 - 2022,
        updated_at: 02 - 05 - 2022
    }
];

const seedEvents = () =>
    Events.bulkCreate(eventsData, {
        individualHooks: true,
        returning: true
    });

module.exports = seedEvents;
