const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');
const testRoutes = require('./testRoutes');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);

router.use('/test', testRoutes);

module.exports = router;
