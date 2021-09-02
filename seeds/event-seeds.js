const { Events } = require('../models');
const { uuid } = require('uuidv4');

const eventsData = [
    {
        id: uuid(),
        title: "Party Event",
        start_date: "2022-02-09",  // 02 - 09 - 2022
        end_date: "2022-02-10",   //  02 - 10 - 2022
        description: "Super Bowl Party at Cody's house. Bring your own snacks",
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myfakesuperbowlparty.com',
        created_at: "2022-02-05",     //  02 - 05 - 2022
        updated_at: "2022-02-06",      //  02 - 06 - 2022
        users_id: "cab6bfc6-bcc6-467b-8b19-1838f33e7e6b"
    },
    {
        id: uuid(),
        title: "Wedding Event",
        start_date: "2022-12-19",     //  12 - 19 - 2022   
        end_date: "2022-12-20",       //  12 - 20 - 2022 
        description: "Anthony's wedding event. Must wear black ties",
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.myweddingparty.com',
        created_at: "2022-12-15",     //  12 - 15 - 2022
        updated_at: "2022-12-16",      //  12 - 16 - 2022
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10"
    },
    {
        id: "test-this-event",             //Used to test get event by id route
        title: "Get Event By ID Check",
        start_date: '2022-01-11',
        end_date: '2022-02-12',
        description: "Event ID Check",
        location: '123 Fake Street',
        type: 'get together',
        category: 'Friends',
        url: 'www.eventidcheck.com',
        created_at: '2022-11-11',
        updated_at: '2022-12-12',
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10"
    },
    // {
    //     id: uuid(),
    //     title: 3,
    //     start_date: 02 - 09 - 2022,
    //     end_date: 02 - 09 - 2022,
    //     description: uuid(),
    //     location: '123 Fake Street',
    //     type: 'get together',
    //     category: 'Friends',
    //     url: 'www.myfakesuperbowlparty.com',
    //     created_at: 02 - 05 - 2022,
    //     updated_at: 02 - 05 - 2022
    // },
    // {
    //     id: uuid(),
    //     title: 3,
    //     start_date: 02 - 09 - 2022,
    //     end_date: 02 - 09 - 2022,
    //     description: uuid(),
    //     location: '123 Fake Street',
    //     type: 'get together',
    //     category: 'Friends',
    //     url: 'www.myfakesuperbowlparty.com',
    //     created_at: 02 - 05 - 2022,
    //     updated_at: 02 - 05 - 2022
    // },
    // {
    //     id: uuid(),
    //     title: 3,
    //     start_date: 02 - 09 - 2022,
    //     end_date: 02 - 09 - 2022,
    //     description: uuid(),
    //     location: '123 Fake Street',
    //     type: 'get together',
    //     category: 'Friends',
    //     url: 'www.myfakesuperbowlparty.com',
    //     created_at: 02 - 05 - 2022,
    //     updated_at: 02 - 05 - 2022
    // }
];

const seedEvents = () =>
    Events.bulkCreate(eventsData, {
        individualHooks: true,
        returning: true
    });

module.exports = seedEvents;
