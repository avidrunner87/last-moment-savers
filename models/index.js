const Users = require('./Users');
const Events = require('./Events');
const Plans = require('./Plans');
const Todos = require('./Todos');
const Comments = require('./Comments');
const Interactions = require('./Interactions');
const Event_Templates = require('./Event_Templates');
const Plan_Templates = require('./Plan_Templates');
const Todo_Templates = require('./Todo_Templates');

Events.belongsTo(Users, {
    as: 'users',
    foreignKey: {
        name: 'users_id',
        allowNull: false
    }
});

// Users.hasMany(Events, {
//     as: 'users',
//     foreignKey: {
//         name: 'users_id',
//         allowNull: false
//     }
// })

Plans.belongsTo(Users, {
    as: 'users',
    foreignKey: {
        name: 'users_id',
        allowNull: false
    }
});

Plans.belongsTo(Events, {
    as: 'events',
    foreignKey: {
        name: 'events_id',
        allowNull: false
    }
});

Todos.belongsTo(Users, {
    as: 'users',
    foreignKey: {
        name: 'users_id',
        allowNull: false
    }
});

Todos.belongsTo(Plans, {
    as: 'plans',
    foreignKey: {
        name: 'plans_id',
        allowNull: false
    }
});

Comments.belongsTo(Users, {
    as: 'users',
    foreignKey: {
        name: 'users_id',
        allowNull: false
    }
});

Comments.belongsTo(Todos, {
    as: 'todos',
    foreignKey: {
        name: 'todos_id',
        allowNull: false
    }
});

Interactions.belongsTo(Users, {
    as: 'users',
    foreignKey: {
        name: 'users_id',
        allowNull: false
    }
});

Interactions.belongsTo(Events, {
    as: 'events',
    foreignKey: {
        name: 'events_id',
        allowNull: false
    }
});

Plan_Templates.belongsTo(Event_Templates, {
    as: 'event_templates',
    foreignKey: {
        name: 'event_templates_id',
        allowNull: false
    }
});

Todo_Templates.belongsTo(Plan_Templates, {
    as: 'plan_templates',
    foreignKey: {
        name: 'plan_templates_id',
        allowNull: false
    }
});

module.exports = {
    Users,
    Events,
    Plans,
    Todos,
    Comments,
    Interactions,
    Event_Templates,
    Plan_Templates,
    Todo_Templates
};
