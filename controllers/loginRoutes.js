const router = require('express').Router();
const { Users } = require('../models');

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


module.exports = router;
