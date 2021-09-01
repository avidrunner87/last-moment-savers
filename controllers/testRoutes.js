const router = require('express').Router();
const withAuth2 = require('../utils/auth2');

router.get('/', withAuth2, (req, res) =>  {

    console.log("WE ARE IN THE TEST SECTION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(req.session);

    res.render('test');
});

module.exports = router;