// This file will determine how requests are handled

const express = require('express');
const router = express.Router();
// Express-validator is used for a form of error checking
const { check, validationResult } = require('express-validator');

const Album = require('../models/photos/Album');
const Image = require('../models/photos/Image');

// @route   POST api/albums
// @desc    Register Photo Album
// @access  Private
// req.body is the data that's sent to the route
router.post('/', [
    check('title', 'Please include a title').not().isEmpty(),
    check('description', 'Please include a description').not().isEmpty()
], async (req, res) => {
    // res.send(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return 400 status and array of error messages
        return res.status(400).json({errors: errors.array()})
    }
        // res.send(req.body);
        let {title, dateTaken, uploadDate, photoCount, description, images} = req.body;

        try {
            // checks if there's an exsiting album in the database with the same name
            let existingAlbum = await Album.findOne({ title });
            if (existingAlbum) {
                return res.status(400).json({ msg: 'Album already exists' });
            }

            let tempImages = await Image.find({ albumName: title });
            images = tempImages;

            photoCount = images.length || 0;

            let album = new Album({
                title, 
                dateTaken,
                uploadDate,
                photoCount,
                description,
                images
            });
    
            // saves to the database
            await album.save();
    
            res.send('Album: ' + title + ' Saved');
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
});

// @route   GET api/albums
// @desc    Get Photo Album 
// @access  Public
router.get('/', async (req, res) => {
    // res.send('Retrieved Photo Albums')
    try {
        // retrives collection of all albums info
        const albums = await Album.find();
        res.json(albums);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   UPDATE api/albums
// @desc    Update Album
// @access  Private
router.put('/:id', async (req, res) => {
    res.send('Update Album')
});

// @route   DELETE api/albums
// @desc    Delete a Photo Album
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Registered Photo Album')
});

module.exports = router;