const router = require('express').Router();
const { uuid } = require('uuidv4');
const withAuth = require('../../utils/auth');
const { Plans } = require('../../models');


// router.get('/', withAuth, async (req, res) => {});

// Create a new plans
router.post('/', withAuth, async (req, res) => {
    try {
        const plansData = await Plans.create({
            id: uuid(),
            title: req.body.title,
            created_at: new Date(),
            updated_at: new Date(),
            events_id: req.body.events_id,
            users_id: req.session.user_id
        });

        req.session.save(() => {
            res.status(200).json({ message: 'Added Plan' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.put('/', async (req, res) => {});

// Delete a plan
router.delete('/:id', async (req, res) => {
    try {
        const plansData = await Plans.destroy({
            where: {
                id: req.params.id,
                users_id: req.session.user_id
            }
        });

        if (!plansData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(plansData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
