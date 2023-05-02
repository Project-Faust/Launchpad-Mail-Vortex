const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class EmailList extends Model {
};

EmailList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        }
    });

EmailList.belongsTo(User, {
    foreignKey: {
        allowNull: false,
    },
});

module.exports = EmailList;
