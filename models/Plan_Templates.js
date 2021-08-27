const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plan_Templates extends Model { }

Plan_Templates.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            
        },        
        event_template_id: {
            type: DataTypes.UUID,
            references: {
                model: 'event_templates',
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
        modelName: 'plan_templates',
    }
);

module.exports = Plan_Templates;
