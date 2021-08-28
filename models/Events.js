const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Events extends Model { }

Events.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'users',
                key: 'id',
                unique: false
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
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
        url: {
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
        modelName: 'events',
    }
);

module.exports = Events;
