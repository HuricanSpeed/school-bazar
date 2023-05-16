const User = require("../models/user.model")

const approve = (req, res, next) => {
    try {
        User.update({
            active: 1
        }, {
            where: {
                username: req.body.username
            }
        })
        res.status(200).json({success: true, message: "Account approved"})
    } catch (error) {
        next(error)
    }
}

const removePost = (req, res, next) => {
    try {
        User.destroy({
            where: {
                id: req.body.id
            }
        })
        res.status(200).json({success: true, message: "Post removed successfully"})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    approve,
    removePost
}