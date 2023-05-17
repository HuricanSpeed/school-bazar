const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middlewares/login.middleware')
const sessionController = require('../controllers/session.controller')

router.get('/getUser', loginMiddleware.check, sessionController.getUser)

module.exports = router