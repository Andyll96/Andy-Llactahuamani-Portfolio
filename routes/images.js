const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Image = require('../models/photos/Image');


// @route   POST api/album
// @desc    Register a Photo into an Album
// @access  Public
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
            await image.save();

            res.send('Image: ' + fileName + ' Saved');
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }

});

// @route   GET api/album
// @desc    Get all photos in an album
// @access  Public
router.get('/', (req, res) => {
    res.send('Registered photo into Album')
});

// @route   UPDATE api/album
// @desc    Update photo in an album
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update Photo')
});

// @route   DELETE api/album
// @desc    Update photo in an album
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete Photo')
});

module.exports = router;