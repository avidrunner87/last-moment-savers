const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todos extends Model { }

Todos.init(
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
            allowNull: true,
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: true,
        }, 
        status: {
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
        modelName: 'todos',
    }
);

module.exports = Todos;
