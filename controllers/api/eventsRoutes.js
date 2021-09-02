const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Events } = require('../../models');


// Get all events associated to a user
router.get('/', async(req, res) => {
    try {
        const user_id = req.session.user_id; 

        const eventsData = await Events.findAll({
            where: { users_id: user_id },          
        });

        res.status(200).json(eventsData);
    }
    catch (err) {
        console.log(err);
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
            res.status(404).json({ message: 'No event found with this id' });
            return;
        }

        req.session.event_id = req.params.id;
        req.session.save(() => {
            res.status(200).json(eventData);
        });        
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// Create a new event
router.post('/', async(req, res) => {
    /*req.body example
    {
        "title": "Post Event Check",
        "start_date": "05-05-2022",
        "end_date": "06-06-2022",
        "description": "Checking for Post Event",
        "location": "123 fake street",
        "type": "get together",
        "category": "friends",
        "url": "www.eventpostcheck"
    }*/
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
    /*req.body example
    {
        "title": "Update Event Check",
        "start_date": "05-05-2022",
        "end_date": "06-06-2022",
        "description": "Checking for Update Event",
        "location": "123 fake street",
        "type": "get together",
        "category": "friends",
        "url": "www.eventupdatecheck"
    }*/
    try 
    {
        const { title, start_date, end_date, description, location, type, category, url } = req.body;        
        const currentDate = new Date().toLocaleDateString();

        const updatedEvent = {
            id: req.params.id,
            title: title,
            start_date: start_date,
            end_date: end_date,
            description: description,
            location: location,
            type: type,
            category: category,
            url: url,
            //created_at: req.session.event_created_at,
            created_at: '04/05/2021', //REPLACE WITH req.session.events_created_at
            updated_at: currentDate,            
        };

        const eventData = await Events.update(updatedEvent, {
            where: {
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id
                //users_id: req.session.user_id,
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
                //users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id
                users_id: req.session.user_id,
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
