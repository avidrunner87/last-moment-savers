const router = require('express').Router();

const usersRoutes = require('./usersRoutes');
const interactions = require('./interactionsRoutes');
const eventsRoutes = require('./eventsRoutes');
const plansRoutes = require('./plansRoutes');
const todosRoutes = require('./todosRoutes');

router.use('/users', usersRoutes);
router.use('/interactions', interactions);
router.use('/events', eventsRoutes);
router.use('/plans', plansRoutes);
router.use('/todos', todosRoutes);

const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID)

module.exports = router;
