const { DataTypes, INTEGER } = require('sequelize');
const { db } = require('./../database/config');
//esto va con mayuscula
const Repair = db.define('repairs', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    userId: {
        type: INTEGER,
        allowNull: false,
    },
    motorsNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});
module.exports = Repair;
