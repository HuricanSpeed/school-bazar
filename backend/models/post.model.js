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
    }
})

module.exports = Post