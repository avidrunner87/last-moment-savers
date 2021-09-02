const router = require('express').Router();
const { Users } = require('../models');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

router.get('/', (req, res) => {
    res.render('login.handlebars');
});

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const userData = await Users.findOne({ where: { email: email } });
        if (!userData) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }

        const validPassword = await userData.checkPassword(password);
        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }

        const user = userData.get({ plain: true });

        req.session.user_id = user.id;
        req.session.logged_in = true;

        req.session.save(() => {
            console.log(req.session);
            res.status(200).json({ message: 'Logged in' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req,res)=>{
    let token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
      }
      verify()
      .then(()=>{
          res.cookie('session-token', token);
          res.send('success')
      })
      .catch(console.error);

})

module.exports = router;
