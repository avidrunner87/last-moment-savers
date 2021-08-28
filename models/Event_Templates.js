const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event_Templates extends Model { }

Event_Templates.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
        created_at:
        {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at:
        {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event_templates',
    }
);

module.exports = Event_Templates;
