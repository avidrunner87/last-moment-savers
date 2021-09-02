const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Plan_Templates } = require('../../models');

// TODO: Get all plan templates using the event template ID
router.get('/', async(req, res) => {
    try 
    {
        const allPlanTemplatesData = await Plan_Templates.findAll({
            where: {
                event_templates_id: req.session.event_template_id
            }
        });

        res.status(200).json(allPlanTemplatesData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Get a single plan template using the event template ID
router.get('/:id', async(req, res) => {
    try 
    {
        const planTemplateData = await Plan_Templates.findByPk(req.params.id, {
            where: {
                event_templates_id: req.session.event_template_id
            }
        });

        if (!planTemplateData) {
            res.status(404).json({ message: 'No Plan Template found with this id' });
            return;
        }

        req.session.plan_template_id = req.params.id;
        req.session.save(() => {
            res.status(200).json(planTemplateData);
        });        
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and create a plan template in the DB
router.post('/', async(req, res) => {
    try 
    {      
        const { title } = req.body;
        const newSqlDate = createSqlDate();        

        const plan_template = {
            id: uuid(),
            title: title,            
            created_at: newSqlDate,
            updated_at: newSqlDate          
        };
        
        await Plan_Templates.create(plan_template, {
            where: {
                event_templates_id: 'test-this-event_template' //RANDOM UUID TO TEST REPLACE WITH req.session.event_templates_id       
            }
        });

        req.session.plan_template_id = plan_template.id;
        req.session.plan_template_created_at = plan_template.created_at;
        req.session.save(() => {
         res.status(200).json({ message:'Added Plan Template' });
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
        const { title } = req.body;
        const newSqlDate = createSqlDate(); 

        const updatedPlan_template = {
            id: req.params.id,
            title: title,            
            created_at: req.session.plan_template_created_at,
            updated_at: newSqlDate,    
        };

        const planTemplateData = await Plan_Templates.update(updatedPlan_template, {
            where: { 
                event_templates_id: req.session.event_template_id,               
                id: req.params.id
            }
        })
        res.status(200).json(planTemplateData);
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
        const planTemplateData = await Plan_Templates.destroy({
            where: { 
                event_templates_id: req.session.event_template_id,               
                id: req.params.id
            }          
        });

        if (!planTemplateData) {
            res.status(404).json({ message: 'No Plan Template found with this id!' });
            return;
          }
        res.status(200).json(planTemplateData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

module.exports = router;

