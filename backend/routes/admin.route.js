const express = require('express');
const router = express.Router();

const adminController = require("../controllers/admin.controller")
const validatorMiddleware = require("../middlewares/validator.middleware")

router.get("/getapprovals", adminController.getApprovals)
router.post("/approve", validatorMiddleware.accountApprove, adminController.approve)
router.post("/removepost", validatorMiddleware.removePost, adminController.removePost)

module.exports = router