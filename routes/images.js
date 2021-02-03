const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Album = require('../models/photos/Album');
const Image = require('../models/photos/Image');

// DELETE THIS COMMENT

// TODO: MUST ADD AUTHORIZATION FOR PRIVATE ROUTES

// @route   POST api/images
// @desc    Register a Photo into an Album
// @access  Private
router.post('/', [
    check('fileName', 'Filename Required').not().isEmpty(),
    check('fileLocation', 'File Location Required').not().isEmpty(),
    check('fileSize', 'File Size Required').not().isEmpty()
], async (req, res) => {
    // res.send(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return 400 status and array of error messages
        return res.status(400).json({errors: errors.array()})
    }
    
    // res.send(req.body);
        const { fileName, fileLocation, fileSize, albumName, dateTaken, fstop, shutterSpeed, iso, focalLength, resolution, camera } = req.body;


        try {
            let existingImage = await Image.findOne({ fileName });
            // if image exsists
            if (existingImage) {
                return res.status(400).json({ msg: 'Image already exists' });
            }

            // creates new Image Object
            let image = new Image({
                fileName,
                fileLocation,
                fileSize,
                albumName,
                dateTaken,
                fstop,
                shutterSpeed,
                iso,
                focalLength,
                resolution,
                camera
            });

            // saves to the database
            const newImage = await image.save();
            

            res.send('Image: ' + fileName + ' Saved\n' + newImage);
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }

});

// @route   GET api/images
// @desc    Get all photos in an album
// @access  Public
router.get('/', async (req, res) => {
    // res.send('Registered photo into Album')
    try {
        // respond with list of images
        const images = await Image.find();
        // console.log(images);
        res.json(images);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   UPDATE api/images
// @desc    Update photo in an album
// @access  Private
router.put('/:id', async (req, res) => {
    const { fileName, fileLocation, thumbnailLocation, fileSize, albumName, dateTaken, fstop, shutterSpeed, iso, focalLength, resolution, camera } = req.body;

    const imageFields = {};

    if (fileName) imageFields.fileName = fileName;
    if (fileLocation) imageFields.fileLocation = fileLocation;
    if (thumbnailLocation) imageFields.thumbnailLocation = thumbnailLocation;
    if (fileSize) imageFields.fileSize = fileSize;
    if (albumName) imageFields.albumName = albumName;
    if (dateTaken) imageFields.dateTaken = dateTaken;
    if (fstop) imageFields.fstop = fstop;
    if (shutterSpeed) imageFields.shutterSpeed = shutterSpeed;
    if (iso) imageFields.iso = iso;
    if (focalLength) imageFields.focalLength = focalLength;
    if (resolution) imageFields.resolution = resolution;
    if (camera) imageFields.camera = camera;

    try {
        let image = await Image.findById(req.params.id);

        if (!image) return res.status(404).json({ msg: 'Image not found' });

        image = await Image.findByIdAndUpdate(req.params.id, { $set: imageFields }, { new: true });

        res.json(image);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/images
// @desc    Update photo in an album
// @access  Private
router.delete('/:id', async (req, res) => {
    // res.send('Delete Photo')
    try {
        let image = await Image.findById(req.params.id);

        if (!image) return res.status(404).json({ msg: 'Image not found' });

        await Image.findByIdAndRemove(req.params.id);
        
        res.json({ msg: 'Image ' + image.fileName + ' Removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;