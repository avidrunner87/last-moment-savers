const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Events, Plans, Todos } = require('../models');

router.get('/', withAuth, async (req, res) => {
    try {

        const user_id = req.session.user_id; 

        const eventsData = await Events.findAll({
            where: { users_id: user_id },          
        });
    
        res.render('dashboard', {
            eventsData,
            logged_in: req.session.logged_in
        });
    } catch (err) {
            console.log(err);
            res.status(500).json(err);
    }  
});

router.get('/events/:id', withAuth, async (req, res) => {
    try {

        const user_id = req.session.user_id; 

        const eventsData = await Events.findAll({
            where: { 
                users_id: user_id 
            },          
        });

        const eventData = await Events.findOne({
            where: {
                users_id: user_id,
                id: req.params.id
            }
        });

        const plansData = await Plans.findAll({
            where: { 
                users_id: user_id,
                events_id: req.params.id
            },          
        });

        if (eventData) {
            res.render('dashboard', {
                eventData,
                eventsData,
                plansData,
                logged_in: req.session.logged_in
            });
        } else {
            res.redirect('/dashboard');
        }
    
    } catch (err) {
            console.log(err);
            res.status(500).json(err);
    }  
});

module.exports = router;
