const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Plans } = require('../../models');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID)

router.get('/', async (req, res) => {});

// Create a new plans
router.post('/', async(req, res) => {

    try {
        const plansData = await Plans.create({
            id: uuid(),
            title: req.body.title,
            created_at: new Date(),
            updated_at: new Date(),
            events_id: req.body.events_id,
            users_id: req.session.user_id 
        });

        req.session.save(() => {
            res.status(200).json({ message:"Added Plan" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }    
});

router.put('/', async (req, res) => {});

router.delete('/', async (req, res) => {});

module.exports = router;
