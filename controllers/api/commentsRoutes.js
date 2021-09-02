const router = require('express').Router();
const { Users, Interactions, Events, Plans, Todos, Comments } = require('../../models');
const { createSqlDate, modifyDateForSql } = require('../../utils/dateHelper');

// TODO: Get all comments associated to a user ID and todo ID
router.get('/', async(req, res) => {
    try 
    {
        const user_id = req.session.user_id; 
        const todo_id = req.session.todo_id;

        const allCommentsData = await Comments.findAll({
            where: { 
                users_id: user_id,
                todo_id: todo_id  
            },          
        });

        res.status(200).json(allCommentsData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

// TODO: Get a single comment using the user ID and todo ID
router.get('/:id', async(req, res) => {
    try 
    {
        const commentData = await Comments.findByPk(req.params.id, {
            where: { 
                users_id: req.session.user_id,
                todo_id: req.session.todo_id,
                id: req.params.id 
            },           
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }

        req.session.comment_id = req.params.id;
        req.session.save(() => {
            res.status(200).json(commentData);
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
        const { body } = req.body;
        const newSqlDate = createSqlDate();        

        const comment = {
            id: uuid(),
            body: body,         
            created_at: newSqlDate,
            updated_at: newSqlDate, 
            users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
            todo_id: 'test-this-todo' //RANDOM UUID TO TEST TODO REPLACE WITH req.session.todo_id       
        };
        
        await Comments.create(comment);

        req.session.comment_id = comment.id;
        req.session.comment_created_at = newSqlDate;
        req.session.save(() => {
         res.status(200).json({ message:'Added Comment' });
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
        const { body } = req.body;              
        const newSqlDate = createSqlDate();

        const updatedComment = {
            id: req.params.id,
            body: body,          
            created_at: req.session.comment_created_at,
            updated_at: newSqlDate             
        };

        const commentData = await Comments.update(updatedComment, {
            where: { 
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
                todo_id: 'test-this-todo', //RANDOM UUID TO TEST TODO REPLACE WITH req.session.todo_id  
                id: req.params.id 
            },   
        })
        res.status(200).json(commentData);
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
        const commentData = await Comments.destroy({
            where: { 
                users_id: 'd39bae8f-d1e0-43ab-9018-d0c750c72d10',   //RANDOM UUID REPLACE WITH req.session.user_id 
                todo_id: 'test-this-todo', //RANDOM UUID TO TEST TODO REPLACE WITH req.session.todo_id  
                id: req.params.id 
            },             
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
          }
        res.status(200).json(commentData);
    }
    catch (err)
    {
        res.status(500).json(err);
    }    
});

module.exports = router;