const { Sequelize, DataTypes } = require('sequelize');
const { Users } = require('../models');
const { uuid } = require('uuidv4');

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
        id: "9b4845a3-451a-4ff5-93b1-23578e4dd356",
        first_name: 'Robert',
        last_name: 'Wilson',
        email: 'robert@gmail.com',
        password: '12345'
    },
    {
        id: "c01830fb-3e4c-420d-900b-f8b6c35d09d7",
        first_name: 'Andrew',
        last_name: 'Ronchetto',
        email: 'andrew@gmail.com',
        password: '12345'
    },
    {
        id: "7d8bf725-23f0-425a-a451-01da751c66bf",
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
