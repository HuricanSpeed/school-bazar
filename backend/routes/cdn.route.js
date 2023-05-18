const express = require('express');
const router = require('./post.route');
const multer = require('multer');

const cdnController = require("../controllers/cdn.controller")

const storage = multer.diskStorage({
    destination: '../schoolbazar/src/assets/images', // Specify the directory where the files will be saved
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Generate a unique file name
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), cdnController.upload);

module.exports = router