const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage.handlebars');

    //res.redirect('/dashboard');
});

module.exports = router;
