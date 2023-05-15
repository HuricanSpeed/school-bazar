const express = require('express');
const router = express.Router();

const validatorMiddleware = require('../middlewares/validator.middleware')

const loginController = require('../controllers/login.controller')

router.post('/login', validatorMiddleware.login, loginController.login)
router.post('/register', validatorMiddleware.register, loginController.register)


module.exports = router