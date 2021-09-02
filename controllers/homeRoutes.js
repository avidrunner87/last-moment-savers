const router = require('express').Router();
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID)

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;
