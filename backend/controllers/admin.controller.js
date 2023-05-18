const User = require("../models/user.model")
const Post = require("../models/post.model")

const getApprovals = (req, res, next) => {
    try {
        User.findAll({
            where: {
                active: 0
            }
        }).then(result => {
            if(result.length > 0){
                res.status(200).json({success: true, message: "Approvals found", approvals: result})
            } else {
                res.status(404).json({success: false, message: "No approvals found"})
            }
        })
    } catch (error) {
        next(error)
    }
}

const getPostApprovals = (req, res, next) => {
    try {
        Post.findAll({
            where: {
                active: 0
            }
        }).then(result => {
            if(result.length > 0){
                res.status(200).json({success: true, message: "Approvals found", approvals: result})
            } else {
                res.status(404).json({success: false, message: "No approvals found"})
            }
        })
    } catch (error) {
        next(error)
    }
}

const approve = (req, res, next) => {
    try {
        User.update({
            active: 1
        }, {
            where: {
                id: req.body.id
            }
        })
        res.status(200).json({success: true, message: "Account approved"})
    } catch (error) {
        next(error)
    }
}

const deleteAccount = (req, res, next) => {
    try {
        User.destroy({
            where: {
                id: req.body.id
            }
        })
        res.status(200).json({success: true, message: "Account deleted"})
    } catch (error) {
        next(error)
    }
}

const approvePost = (req, res, next) => {
    try {
        Post.update({
            active: 1
        }, {
            where: {
                id: req.body.id
            }
        })
        res.status(200).json({success: true, message: "Post removed successfully"})
    } catch (error) {
        next(error)
    }
}

const removePost = (req, res, next) => {
    try {
        Post.destroy({
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
    deleteAccount,
    approvePost,
    removePost,
    getApprovals,
    getPostApprovals
}