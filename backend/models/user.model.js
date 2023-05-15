const { DataTypes } = require('sequelize')
const sequelize = require('../services/sequelize.service')

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telnumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    group: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user"
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "0"
    }
})

module.exports = User