const sequelize = require("../services/sequelize.service");
const User = require("../models/user.model")


function sync() {
    sequelize.sync().then(() => {
        console.log("Tables synced")
    }).catch((error) => {
        console.error("Error syncing database: ", error)
    })
}

module.exports = {
    sync
}