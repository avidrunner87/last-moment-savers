const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    // Logged In
    if(req.session.logged_in){
        return res.redirect('/dashboard');
    }
    
    // Not Logged In
    res.render('login');
});

module.exports = router;