const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Users, Interactions, Events, Plans, Todos } = require('../../models');

// TODO: Get all todo associated to a user
router.get('/', async(req, res) => {
    try 
    {
        const user_id = req.session.user_id; 

        const allEventsData = await Events.findAll({
            where: { users_id: user_id },          
        });

        res.status(200).json(allEventsData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Get a single event using the ID
router.get('/:id', async(req, res) => {
    try 
    {
        const eventData = await Events.findByPk(req.params.id);

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

// TODO: Take form information via api body and create a new event in the DB
router.post('/', async(req, res) => {
    try 
    {      
        const { title, start_date, end_date, description, location, type, category, url } = req.body;
        const modifiedStartDate = modifyDateForSql(start_date);
        const modifiedEndDate = modifyDateForSql(end_date);
        const newSqlDate = createSqlDate();        

        const event = {
            id: uuid(),
            title: title,
            start_date: modifiedStartDate,
            end_date: modifiedEndDate,
            description: description,
            location: location,
            type: type,
            category: category,
            url: url,
            created_at: newSqlDate,
            updated_at: newSqlDate, 
            users_id: "d39bae8f-d1e0-43ab-9018-d0c750c72d10"   //RANDOM UUID REPLACE WITH req.session.user_id        
        };
        
        await Events.create(event);

        req.session.event_created_at = newSqlDate;
        req.session.save(() => {
        res.status(200).json({ message:"Added Event" });
        });
    }
    catch (err)
    {
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
