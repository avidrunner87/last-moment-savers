const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Event_Templates } = require('../../models');

// TODO: Get all event templates
router.get('/', async(req, res) => {
    try 
    {
        const allEventTemplatesData = await Event_Templates.findAll();

        res.status(200).json(allEventTemplatesData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Get a single event template
router.get('/:id', async(req, res) => {
    try 
    {
        const eventTemplateData = await Event_Templates.findByPk(req.params.id);

        if (!eventTemplateData) {
            res.status(404).json({ message: 'No Event Template found with this id' });
            return;
        }

        req.session.event_template_id = req.params.id;
        req.session.save(() => {
            res.status(200).json(eventTemplateData);
        });        
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
        const { title, description, type, category } = req.body;
        const newSqlDate = createSqlDate();        

        const event_template = {
            id: uuid(),
            title: title,            
            description: description,            
            type: type,
            category: category,
            created_at: newSqlDate,
            updated_at: newSqlDate,    
        };
        
        await Event_Templates.create(event_template);

        req.session.event_template_id = event_template.id;
        req.session.event_template_created_at = event_template.created_at;
        req.session.save(() => {
         res.status(200).json({ message:'Added Event' });
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
        const { title, description, type, category } = req.body;
        const newSqlDate = createSqlDate(); 

        const updatedEvent_template = {
            id: req.params.id,
            title: title,            
            description: description,            
            type: type,
            category: category,
            created_at: req.session.event_template_created_at,
            updated_at: newSqlDate,    
        };

        const eventTemplateData = await Event_Templates.update(updatedEvent_template, {
            where: {                
                id: req.params.id
            }
        })
        res.status(200).json(eventTemplateData);
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
        const eventTemplateData = await Event_Templates.destroy({
            where: {                
                id: req.params.id
            }           
        });

        if (!eventTemplateData) {
            res.status(404).json({ message: 'No Event Template found with this id!' });
            return;
          }
        res.status(200).json(eventTemplateData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

module.exports = router;

