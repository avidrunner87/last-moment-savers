const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    const { user_id, logged_in } = req.session;
    res.render('dashboard', {
        user_id,
        logged_in
    });
});

module.exports = router;
