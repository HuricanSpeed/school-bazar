const Post = require("../models/post.model")

const addPost = (req, res, next) => {
    try {
        Post.create({
            username: req.body.username,
            name: req.body.itemname,
            price: req.body.price,
            state: req.body.state,
            grade: req.body.grade
        })
        res.status(200).json({success: true, message: "Post added successfully"});
    } catch (error) {
        next(error)
    }
}

const getPosts = (req, res, next) => {
    try {
        Post.findAll().then(result => {
            if(result){
                res.status(200).json({success: true, message: "Getted all posts", posts: result})
            } else {
                res.status(404).json({success: false, message: "No posts found"})
            }
        })
    } catch (error) {
        next(error)
    }
}

const getPost = (req, res, next) => {
    try {
        Post.findOne({
            where: {
                id: req.body.id
            }
        }).then(result => {
            if(result) {
                res.status(200).json({success: true, message: "Getted current post", post: result})
            } else {
                res.status(404).json({success: false, message: "Didn't found this post"})
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addPost,
    getPosts,
    getPost
}