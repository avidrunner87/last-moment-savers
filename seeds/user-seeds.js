const { Sequelize, DataTypes } = require('sequelize');
const { Users } = require('../models');
const { uuid } = require('uuidv4');

/*Gave the first two users a static uuid for testing*/

const usersData = [
    {
        id: "cab6bfc6-bcc6-467b-8b19-1838f33e7e6b",
        first_name: 'Cody',
        last_name: 'Markham',
        email: 'cody@gmail.com',
        password: '12345'
    },
    {
        id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10",
        first_name: 'Anthony',
        last_name: 'Cromartie',
        email: 'anthony@gmail.com',
        password: '12345'
    },
    {
        id: uuid(),
        first_name: 'Robert',
        last_name: 'Wilson',
        email: 'robert@gmail.com',
        password: '12345'
    },
    {
        id: uuid(),
        first_name: 'Andrew',
        last_name: 'Ronchetto',
        email: 'andrew@gmail.com',
        password: '12345'
    },
    {
        id: uuid(),
        first_name: 'Autumn',
        last_name: 'Markham',
        email: 'autumn@gmail.com',
        password: '12345'
    }
];

const seedUsers = () =>
    Users.bulkCreate(usersData, {
        individualHooks: true,
        returning: true
    });

module.exports = seedUsers;
