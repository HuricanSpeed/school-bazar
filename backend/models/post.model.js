const { DataTypes } = require('sequelize')
const sequelize = require('../services/sequelize.service')

const Post = sequelize.define("posts", {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    state: {
        type: DataTypes.TINYINT,
        allowNull: false
    }, 
    grade: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    place: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    subject: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "0"
    }
})

module.exports = Post