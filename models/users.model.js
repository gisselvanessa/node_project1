const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');
//esto va con mayuscula
const User = db.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('client', 'employee'),
        allowNull: false,
        defaultValue: 'client',
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'available',
    },
});
module.exports = User;
