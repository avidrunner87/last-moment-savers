const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Users, Interactions, Events, Plans, Todos } = require('../../models');

// Get all events associated to a user
router.get('/', async(req, res) => {
    console.log(req);

    try {
        const user_id = req.session.user_id; 

        const eventsData = await Events.findAll({
            where: { users_id: user_id },          
        });

        res.status(200).json(eventsData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }    
});

// TODO: Get a single event using the ID
router.get('/:id', async(req, res) => {
    try 
    {
        const eventData = await Events.findOne({
            where: {
                users_id: user_id,
                id: req.params.id
            }
        });

        if (!eventData) {
            res.status(404).json({ message: "No category found with this id" });
            return;
        }

        res.status(200).json(eventData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// Create a new event
router.post('/', async(req, res) => {

    try {
        const eventData = await Events.create({
            id: uuid(),
            title: req.body.title,
            description: req.body.description,          
            type: req.body.type,
            category: req.body.category,
            start_date: req.body.start_date || null,
            end_date: req.body.end_date || null,
            location: req.body.location,
            url: req.body.url,
            created_at: new Date(),
            updated_at: new Date(), 
            users_id: req.session.user_id 
        });

        req.session.save(() => {
            res.status(200).json({ message:"Added Event" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and update an event in the DB
router.put('/:id', async(req, res) => {
    try 
    {
        console.log("MADE IT");
        const { title, start_date, end_date, description, location, type, category, url } = req.body;
        console.log(req.body);
        const modifiedStartDate =  start_date.includes('-') ? modifyDateForSql(start_date) : start_date;
        const modifiedEndDate = end_date.includes('-') ? modifyDateForSql(end_date) : end_date;
        const newSqlDate = createSqlDate();
        console.log(modifiedStartDate, modifiedEndDate, newSqlDate);

        const updatedEvent = {
            id: req.params.id,
            title: title,
            start_date: modifiedStartDate,
            end_date: modifiedEndDate,
            description: description,
            location: location,
            type: type,
            category: category,
            url: url,
            created_at: "2021/04/05", //REPLACE WITH req.session.event_created_at
            updated_at: newSqlDate,            
        };

        console.log(updatedEvent);

        const eventData = await Events.update(updatedEvent, {
            where: {
                users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10",   //RANDOM UUID REPLACE WITH req.session.user_id
                id: req.params.id
            }
        })
        res.status(200).json(eventData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and delete an event in the DB
router.delete('/:id', async(req, res) => {
    try 
    {
        const eventData = await Events.destroy({
            where: {
                users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10",   //RANDOM UUID REPLACE WITH req.session.user_id
                id: req.params.id
            }           
        });

        if (!eventData) {
            res.status(404).json({ message: 'No event found with this id!' });
            return;
        }
        res.status(200).json(eventData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

module.exports = router;

// TODO: Every new db item needs the created_at and updated_at fields populated
// TODO: Every update to db item needs the updated_at field populated
