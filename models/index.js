const Users = require('./Users');
const Interactions = require('./Interactions');
const Events = require('./Events');
const Plans = require('./Plans');
const Todos = require('./Todos');

Users.hasMany(Events, {
    foreignKey: 'user_id'
});

Events.belongsTo(Users, {
    foreignKey: 'user_id'
});

Users.hasMany(Interactions, {
    foreignKey: 'user_id'
});

Interactions.belongsTo(Users, {
    foreignKey: 'user_id'
});

Users.hasMany(Plans, {
    foreignKey: 'user_id'
});

Plans.belongsTo(Users, {
    foreignKey: 'user_id'
});

Users.hasMany(Todos, {
    foreignKey: 'user_id'
});

Todos.belongsTo(Users, {
    foreignKey: 'user_id'
});

Events.hasMany(Interactions, {
    foreignKey: 'event_id'
});

Interactions.belongsTo(Events, {
    foreignKey: 'event_id'
});

Events.hasMany(Plans, {
    foreignKey: 'event_id'
});

Plans.belongsTo(Events, {
    foreignKey: 'event_id'
});

Plans.hasMany(Todos, {
    foreignKey: 'plan_id'
});

Todos.belongsTo(Plans, {
    foreignKey: 'plan_id'
});

module.exports = { Users, Interactions, Events, Plans, Todos}