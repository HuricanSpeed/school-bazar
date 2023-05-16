const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller')

router.post("/addpost", postController.addPost)
router.get("/getposts", postController.getPosts)
router.post("/getpost", postController.getPost)

module.exports = router