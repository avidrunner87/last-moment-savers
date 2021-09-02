const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Users } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
    try {
        const userData = await Users.create({
            id: uuid(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });

        req.session.user_id = userData.id;
        req.session.logged_in = true;

        req.session.save(() => {
            res.status(200).json({ message: 'Sign up user' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login an existing user
router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({
            where: { email: req.body.email }
        });

        if (!userData) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }

        req.session.user_id = userData.id;
        req.session.logged_in = true;

        req.session.save(() => {
            res.status(200).json({ message: 'Logged in' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Logout the current user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
