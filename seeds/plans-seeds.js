const { Plans } = require('../models');
const { uuid } = require('uuidv4');

const plansData = [
    {
        id: uuid(),
        title: 'living room',
        created_at: 2022/02/05,     //  02 - 05 - 2022
        updated_at: 2022/02/09,      //  02 - 09 - 2022
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10",   //DUMMY UUID USER ID
        events_id: "test-this-event3"   //DUMMY EVENT ID TEST
    },
    {
        id: uuid(),
        title: 'dining room',
        created_at: 2022/03/05,     //  03 - 05 - 2022
        updated_at: 2022/03/09,      //  03 - 09 - 2022
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10",
        events_id: "test-this-event3"   //DUMMY UUID EVENT ID 
    },
    {
        id: 'test-this-plan',
        title: 'kitchen',
        created_at: 2022/04/05,     //  04 - 05 - 2022
        updated_at: 2022/04/09,      //  04 - 09 - 2022
        users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10",
        events_id: "test-this-event3"   //DUMMY UUID EVENT ID 
    },
    // {
    //     id: uuid(),
    //     title: 'living room',
    //     created_at: 02 - 05 - 2022,
    //     updated_at: 02 - 09 - 2022
    // },
    // {
    //     id: uuid(),
    //     title: 'living room',
    //     created_at: 02 - 05 - 2022,
    //     updated_at: 02 - 09 - 2022
    // },
    // {
    //     id: uuid(),
    //     title: 'living room',
    //     created_at: 02 - 05 - 2022,
    //     updated_at: 02 - 09 - 2022
    // }
];

const seedPlans = () =>
    Plans.bulkCreate(plansData, {
        individualHooks: true,
        returning: true
    });

module.exports = seedPlans;
