const express = require('express');
const router = express.Router();

const adminController = require("../controllers/admin.controller")
const loginMiddleware = require("../middlewares/login.middleware")
const validatorMiddleware = require("../middlewares/validator.middleware")

router.get("/getapprovals", loginMiddleware.check, loginMiddleware.checkAdmin, adminController.getApprovals)
router.post("/approve", validatorMiddleware.accountApprove, loginMiddleware.check, loginMiddleware.checkAdmin, adminController.approve)
router.post("/delete", validatorMiddleware.accountDelete, loginMiddleware.check, loginMiddleware.checkAdmin, adminController.deleteAccount)

router.get("/getpostapprovals", loginMiddleware.check, loginMiddleware.checkAdmin, adminController.getPostApprovals)
router.post("/approvepost", validatorMiddleware.removePost, loginMiddleware.check, loginMiddleware.checkAdmin, adminController.approvePost)
router.post("/removepost", validatorMiddleware.removePost, loginMiddleware.check, loginMiddleware.checkAdmin, adminController.removePost)

module.exports = router