const router = require('express').Router();
const { Users, Interactions, Events, Plans, Todos } = require('../../models');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID)

// router.get('/', async (req, res) => {});

// router.post('/', async (req, res) => {});

// router.put('/', async (req, res) => {});

// router.delete('/', async (req, res) => {});

module.exports = router;
