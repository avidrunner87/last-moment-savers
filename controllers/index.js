const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');



router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);

module.exports = router;
