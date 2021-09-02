const router = require('express').Router();
const { Todos } = require('../../models');
const { uuid } = require('uuidv4');

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


// TODO: Get a single todo using the user ID and plan ID
router.get('/:id', async(req, res) => {
    try 
    {
        const todoData = await Todos.findByPk(req.params.id, {
            where: { 
                users_id: req.session.user_id,
                plans_id: req.session.plan_id,
            },           
        });

        if (!todoData) {
            res.status(404).json({ message: 'No todo found with this id' });
            return;
        }

        req.session.todo_id = req.params.id;
        req.session.save(() => {
            res.status(200).json(todoData);
        });        
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});


// TODO: Take form information via api body and create a new todo in the DB
router.post('/', async(req, res) => {
    try 
    {      
        const { title, description, due_date, status } = req.body;
        const currentDate = new Date().toLocaleDateString();        

        const todo = {
            id: uuid(),
            title: title,
            description: description,
            due_date: currentDate, 
            status: status,          
            created_at: currentDate,
            updated_at: currentDate, 
            users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
            plan_id: 'test-this-plan' //RANDOM UUID TO TEST PLAN REPLACE WITH req.session.plan_id       
        };
        
        await Todos.create(todo);

        req.session.todo_id = todo.id;
        req.session.todo_created_at = newSqlDate;
        req.session.save(() => {
         res.status(200).json({ message:'Added Todo' });
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
        const { title, description, due_date, status } = req.body; 
        const modifiedDueDate =  due_date.includes('-') ? modifyDateForSql(due_date) : due_date;     
        const newSqlDate = createSqlDate();

        const updatedTodo = {
            id: req.params.id,
            title: title,
            description: description,
            due_date: modifiedDueDate, 
            status: status,          
            created_at: req.session.todo_created_at,
            updated_at: newSqlDate               
        };

        const todoData = await Todos.update(updatedTodo, {
            where: { 
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
                plan_id: 'test-this-plan', //RANDOM UUID TO TEST PLAN REPLACE WITH req.session.plan_id  
                id: req.params.id 
            },   
        })
        res.status(200).json(todoData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Take form information via api body and delete an todo in the DB
router.delete('/:id', async(req, res) => {
    try 
    {
        const todoData = await Todos.destroy({
            where: { 
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
                plan_id: 'test-this-plan', //RANDOM UUID TO TEST PLAN REPLACE WITH req.session.plan_id  
                id: req.params.id 
            },             
        });

        if (!todoData) {
            res.status(404).json({ message: 'No todo found with this id!' });
            return;
          }
        res.status(200).json(todoData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

module.exports = router;
