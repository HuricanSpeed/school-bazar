const sharp = require('sharp')
const webp = require("webp-converter")
const fs = require('fs')
const path = require('path')

const upload = async (req, res, next) => {
    const imagePath = req.file.path;
    const fileName = path.parse(req.file.filename).name;
    const compressedImagePath = `../schoolbazar/src/assets/images/${fileName}.webp`; // Path to save the compressed image

    try {
        await sharp(imagePath)
        .resize({ width: 344, height: 460 }) // Set your desired compression settings
        .toFormat('webp')
        .toFile(compressedImagePath);
        
        fs.unlink(imagePath, (error) => {
            if (error) {
              console.error('Error deleting uncompressed image:', error);
            }
        });
        res.status(200).json({success: true, message: "Image uploaded", imageName: `${fileName}.webp`})
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Image compression failed' });
    }
}

module.exports = {
    upload
}