const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Plans } = require('../../models');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '770425769909-1b53dbhequvdv35mnu4o28mjn7mo7jnr.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID)

// TODO: Get all plans associated to a user ID and event ID
router.get('/', async(req, res) => {
    try 
    {
        const user_id = req.session.user_id; 
        const event_id = req.session.event_id;

        const allPlansData = await Plans.findAll({
            where: { 
                users_id: user_id,
                events_id: event_id  
            },          
        });
        res.status(200).json(allPlansData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

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


// TODO: Get a single plan using the user ID and event ID
router.get('/:id', async(req, res) => {
    try 
    {
        console.log(req.session);

        const planData = await Plans.findByPk(req.params.id, {
            where: { 
                users_id: req.session.user_id,
                events_id: req.session.event_id,
            },           
        });

        if (!planData) {
            res.status(404).json({ message: 'No plan found with this id' });
            return;
        }

        req.session.plan_id = req.params.id;
        req.session.save(() => {
            res.status(200).json(planData);
        });        
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});


// TODO: Take form information via api body and create a new plan in the DB
router.post('/', async(req, res) => {
    try 
    {      
        const { title } = req.body;
        const currentDate = new Date().toLocaleDateString();        

        const plan = {
            id: uuid(),
            title: title,            
            created_at: currentDate,
            updated_at: currentDate,
            //users_id: req.session.user_id,
            //events_id: req.session.event_id, 
            users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
            events_id: 'test-this-event' //RANDOM UUID TO TEST EVENT REPLACE WITH req.session.event_id       
        };
        
        await Plans.create(plan);

        req.session.plan_id = plan.id;
        req.session.plan_created_at = plan.created_at;
        req.session.save(() => {
         res.status(200).json({ message:'Added Plan' });
        });
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and update a plan in the DB
router.put('/:id', async(req, res) => {
    try 
    {
        const { title } = req.body;        
        const currentDate = new Date().toLocaleDateString(); ;

        const updatedPlan = {
            id: req.params.id,
            title: title,
            //created_at: req.session.plan_created_at,
            created_at: '04/05/2021', //REPLACE WITH req.session.plan_created_at
            updated_at: currentDate                          
        };

        const planData = await Plans.update(updatedPlan, {
            where: { 
                //users_id: req.session.user_id,
                //events_id: req.session.event_id,
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',  //RANDOM UUID REPLACE WITH req.session.user_id 
                events_id: 'test-this-event', //RANDOM UUID TO TEST EVENT REPLACE WITH req.session.event_id
                id: req.params.id 
            },   
        })
        res.status(200).json(planData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and delete an plan in the DB
router.delete('/:id', async(req, res) => {
    try 
    {
        const planData = await Plans.destroy({
            where: { 
                //users_id: req.session.user_id,
                //events_id: req.session.event_id,I
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',  //RANDOM UUID REPLACE WITH req.session.user_id 
                events_id: 'test-this-event', //RANDOM UUID TO TEST EVENT REPLACE WITH req.session.event_id
                id: req.params.id 
            },            
        });

        if (!planData) {
            res.status(404).json({ message: 'No plan found with this id!' });
            return;
          }
        res.status(200).json(planData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

module.exports = router;
