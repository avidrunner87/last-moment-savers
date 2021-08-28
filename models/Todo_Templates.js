const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todo_Templates extends Model { }

Todo_Templates.init(
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
        modelName: 'todo_templates',
    }
);

module.exports = Todo_Templates;
