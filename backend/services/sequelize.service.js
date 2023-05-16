const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('schoolbazaar', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate().then(() => {
    console.log("DB: Connection has been established successfully")
}).catch((err) => {
    console.error("DB: Unable to connect to the database:", error)
})

module.exports = sequelize