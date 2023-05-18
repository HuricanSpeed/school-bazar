const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller')
const loginMiddleware = require('../middlewares/login.middleware')
const validatorMiddleware = require("../middlewares/validator.middleware")

router.post("/addpost", validatorMiddleware.addpost, loginMiddleware.check, postController.addPost)
router.post("/getpost", validatorMiddleware.getpost, postController.getPost)

router.get("/getposts", postController.getPosts)

module.exports = router