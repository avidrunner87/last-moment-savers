const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Todos } = require('../../models');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID)

router.get('/', async (req, res) => {});

// Create a new todos
router.post('/', async(req, res) => {

    try {
        const todosData = await Todos.create({
            id: uuid(),
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date || null,
            status: req.body.status,
            created_at: new Date(),
            updated_at: new Date(),
            plans_id: req.body.plans_id,
            users_id: req.session.user_id 
        });

        req.session.save(() => {
            res.status(200).json({ message:"Added Todo" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }    
});

// Get all todos associated to a plan
router.get('/plans/:plan_id', async(req, res) => {
    console.log(req);

    try {
        const user_id = req.session.user_id; 

        const todosData = await Todos.findAll({
            where: { 
                plans_id: req.params.plan_id,
                users_id: user_id
            },          
        });

        res.status(200).json(todosData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }    
});

router.put('/', async (req, res) => {});

router.delete('/', async (req, res) => {});

module.exports = router;
