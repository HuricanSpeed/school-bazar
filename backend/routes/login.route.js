const express = require('express');
const router = express.Router();

const validatorMiddleware = require('../middlewares/validator.middleware')
const loginMiddleware = require('../middlewares/login.middleware')
const loginController = require('../controllers/login.controller')

router.post('/login', validatorMiddleware.login, loginController.login)
router.post('/register', validatorMiddleware.register, loginController.register)
router.get('/logout', loginMiddleware.check, loginController.logout)


module.exports = router