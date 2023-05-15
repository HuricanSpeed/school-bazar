const User = require("../models/user.model");

function findUser(username) {
    return User.findOne({
        where: {
            username: username
        }
    })
}

module.exports = {
    findUser
}