const { Comments } = require('../models');

const commentsData = [
    {
        id: "Cody Markham",
        body: 'Ill dust',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: "Robert Wilson",
        body: 'I will clean the dishes',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: "Andrew Ronchetto",
        body: 'Ill sweep the kitchen',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: "Anthony Cromartie",
        body: 'Ill mop',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
      {
        id: "Autumn Markham",
        body: 'Ill fix the cushions',
        created_at: 02-05-2022,
        updated_at:02-09-2022
      },
    ];


const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;