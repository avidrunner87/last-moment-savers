const router = require('express').Router();
const { Users, Interactions, Events, Plans, Todos } = require('../../models');
const { createSqlDate, modifyDateForSql } = require('../../utils/dateHelper');

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

// TODO: Get a single plan using the user ID and event ID
router.get('/:id', async(req, res) => {
    try 
    {
        const planData = await Events.findByPk(req.params.id, {
            where: { 
                users_id: req.session.user_id,
                events_id: req.session.event_id,
                id: req.params.id 
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
        const newSqlDate = createSqlDate();        

        const plan = {
            id: uuid(),
            title: title,            
            created_at: newSqlDate,
            updated_at: newSqlDate, 
            users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
            events_id: 'test-this-event3' //RANDOM UUID TO TEST EVENT REPLACE WITH req.session.event_id       
        };
        
        await Plans.create(plan);

        req.session.plan_id = plan.id;
        req.session.plan_created_at = newSqlDate;
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
        const newSqlDate = createSqlDate();

        const updatedPlan = {
            id: req.params.id,
            title: title,
            created_at: '2021/04/05', //REPLACE WITH req.session.plan_created_at
            updated_at: newSqlDate                          
        };

        const planData = await Plans.update(updatedPlan, {
            where: { 
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',  //RANDOM UUID REPLACE WITH req.session.user_id 
                events_id: 'test-this-event3', //RANDOM UUID TO TEST EVENT REPLACE WITH req.session.event_id
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
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',  //RANDOM UUID REPLACE WITH req.session.user_id 
                events_id: 'test-this-event3', //RANDOM UUID TO TEST EVENT REPLACE WITH req.session.event_id
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
