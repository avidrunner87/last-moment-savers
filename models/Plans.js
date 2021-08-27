const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plans extends Model { }

Plans.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.UUIDV4,
            references: {
                model: 'users',
                key: 'id',
                unique: false
            }
        },
        event_id: {
            type: DataTypes.UUIDV4,
            references: {
                model: 'plans',
                key: 'id',
                unique: false
            }
        },
        title: {
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
        modelName: 'plans',
    }
);

module.exports = Plans;