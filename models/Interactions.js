const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interactions extends Model {}

Interactions.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'interactions'
    }
);

module.exports = Interactions;
