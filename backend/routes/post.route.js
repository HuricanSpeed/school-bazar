const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller')
const validatorMiddleware = require("../middlewares/validator.middleware")

router.post("/addpost", validatorMiddleware.addpost, postController.addPost)
router.post("/getpost", validatorMiddleware.getpost, postController.getPost)

router.get("/getposts", postController.getPosts)

module.exports = router