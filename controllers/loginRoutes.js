const router = require('express').Router();
const { Users } = require('../models');

router.get('/', (req, res) => {
    // Logged In
    console.log("LOGIN ROUTE");
    // if (req.session.logged_in) {
    //     return res.redirect('/dashboard');
    // }

    // Not Logged In
    res.render('login');
});

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const userData = await Users.findOne({ where: { email: email } });
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const user = userData.get({ plain: true });
        console.log("THIS THE USER DATA*********************", user);

        
        req.session.user_id = user.id;
        req.session.logged_in = true; 
                   
        req.session.save(() => {
            console.log("REQUEST SESSION IN LOGIN**************************", req.session);         
            res.status(200).json({message:"Logged in"});           
        });       
    }
    catch (err) {
        res
            .status(500)
            .json(err);
    }
});

module.exports = router;