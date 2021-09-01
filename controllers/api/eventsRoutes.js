const router = require('express').Router();
const { Users, Interactions, Events, Plans, Todos } = require('../../models');

<<<<<<< HEAD
router.get('/', async (req, res) => {});

router.post('/', async (req, res) => {});

router.put('/', async (req, res) => {});

router.delete('/', async (req, res) => {});

module.exports = router;
=======
// TODO: Get all todo associated to a user
router.get('/', async(req, res) => {
    
});

// TODO: Get a single event using the ID
router.get('/:id', async(req, res) => {
    
});

// TODO: Take form information via api body and create a new event in the DB
router.post('/', async(req, res) => {
    
});

// TODO: Take form information via api body and update an event in the DB
router.put('/', async(req, res) => {
    
});

// TODO: Take form information via api body and delete an event in the DB
router.delete('/', async(req, res) => {
    
});

module.exports = router;

// TODO: Every new db item needs the created_at and updated_at fields populated
// TODO: Every update to db item needs the updated_at field populated
>>>>>>> 0bd8b0c (Update file with example TODOs)
