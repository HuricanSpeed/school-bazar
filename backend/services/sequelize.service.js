const { Sequelize } = require('sequelize')
const process = require("process");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate().then(() => {
    console.log("DB: Connection has been established successfully")
}).catch((err) => {
    console.error("DB: Unable to connect to the database:", error)
})

module.exports = sequelize