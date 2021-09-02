const router = require('express').Router();
const { uuid } = require('uuidv4');
const { Todo_Templates } = require('../../models');
const { createSqlDate } = require('../../utils/dateHelper');

// TODO: Get all todo templates using the plan template ID
router.get('/', async(req, res) => {
    try 
    {
        const allTodoTemplatesData = await Todo_Templates.findAll({
            where: {
                plan_templates_id: req.session.plan_template_id
            }
        });

        res.status(200).json(allTodoTemplatesData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Get a single todo template using the plan template ID
router.get('/:id', async(req, res) => {
    try 
    {
        const todoTemplateData = await Todo_Templates.findByPk(req.params.id, {
            where: {
                plan_templates_id: req.session.plan_template_id
            }
        });

        if (!todoTemplateData) {
            res.status(404).json({ message: 'No Todo Template found with this id' });
            return;
        }

        req.session.todo_template_id = req.params.id;
        req.session.save(() => {
            res.status(200).json(todoTemplateData);
        });        
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and create a todo template in the DB
router.post('/', async(req, res) => {
    try 
    {      
        const { title, description } = req.body;
        const newSqlDate = createSqlDate();        

        const todo_template = {
            id: uuid(),
            title: title,
            description: description,            
            created_at: newSqlDate,
            updated_at: newSqlDate          
        };
        
        await Todo_Templates.create(todo_template, {
            where: {
                plan_templates_id: 'test-this-plan_template' //RANDOM UUID TO TEST REPLACE WITH req.session.plan_template_id       
            }
        });

        req.session.todo_template_id = todo_template.id;
        req.session.todo_template_created_at = todo_template.created_at;
        req.session.save(() => {
         res.status(200).json({ message:'Added Todo Template' });
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
        const { title, description } = req.body;
        const newSqlDate = createSqlDate(); 

        const updatedTodo_template = {
            id: req.params.id,
            title: title,  
            description: description,          
            created_at: req.session.todo_template_created_at,
            updated_at: newSqlDate,    
        };

        const todoTemplateData = await Plan_Templates.update(updatedTodo_template, {
            where: { 
                plan_templates_id: req.session.plan_template_id,               
                id: req.params.id
            }
        })
        res.status(200).json(todoTemplateData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and delete an todo template in the DB
router.delete('/:id', async(req, res) => {
    try 
    {
        const todoTemplateData = await Todo_Templates.destroy({
            where: { 
                plan_templates_id: req.session.plan_template_id,               
                id: req.params.id
            }          
        });

        if (!todoTemplateData) {
            res.status(404).json({ message: 'No Todo Template found with this id!' });
            return;
          }
        res.status(200).json(todoTemplateData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

module.exports = router;
