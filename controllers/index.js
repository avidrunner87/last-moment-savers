const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const usersRoutes = require('./usersRoutes');
const interactions = require('./interactionsRoutes');
const eventsRoutes = require('./eventsRoutes');
const plansRoutes = require('./plansRoutes');
const todosRoutes = require('./todosRoutes');

router.use('/', homeRoutes);
router.use('/users', usersRoutes)
router.use('/interactions', interactions);
router.use('/events', eventsRoutes)
router.use('/plans', plansRoutes)
router.use('/todos', todosRoutes)

module.exports = router;