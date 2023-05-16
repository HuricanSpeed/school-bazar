const Post = require("../models/post.model")

const addpost = (req, res, next) => {
    Post.create({
        username: req.body.username,
        name: req.body.itemname,
        price: req.body.price,
        state: req.body.state,
        grade: req.body.grade
    })
    res.status(200).json({success: true, message: "Post added successfully"});
}

module.exports = {
    addpost
}