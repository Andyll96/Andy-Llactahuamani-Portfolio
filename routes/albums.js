// 

const express = require('express');
const router = express.Router();
// Express-validator is used for a form of error checking
const { check, validationResult } = require('express-validator');

const Album = require('../models/photos/Album');
const Image = require('../models/photos/Image');

// TODO: MUST ADD AUTHORIZATION FOR PRIVATE ROUTES

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

            // Searches for any images with same album name
            let tempImages = await Image.find({ albumName: title });
            // 
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
            const newAlbum = await album.save();
    
            res.send('Album: ' + title + ' Saved\n' + newAlbum);
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
// TODO: WHEN AN IMAGE IS INSERTED INTO THE DATABASE, YOU MUST UPDATE THE ALL ALBUM TO INCLUDE THE IMAGE AND TO UPDATE THE PHOTO COUNT
// TODO: WHEN AN IMAGE IS ADDED IT MUST ALSO UPDATE 
router.put('/:id', async (req, res) => {
    // res.send('Update Album')
    const { title, dateTaken, uploadDate, photoCount, description, images} = req.body;

    const albumFields = {};
    if (title) albumFields.title = title;
    if (dateTaken) albumFields.dateTaken = dateTaken;
    if (uploadDate) albumFields.uploadDate = uploadDate;
    if (photoCount) albumFields.photoCount = photoCount;
    if (description) albumFields.desctiption = desctiption;
    if (images) albumFields.images = images;

    try {
        let album = await Album.findById(req.params.id);

        if (!album) return res.status(404).json({ msg: 'Album not found' });

        // new: true returns the object after it's been updated
        album = await Album.findByIdAndUpdate(req.params.id, { $set: albumFields }, { new: true });

        res.json(album);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

});

// @route   DELETE api/albums
// @desc    Delete a Photo Album
// @access  Private
router.delete('/:id', async (req, res) => {
    // res.send('Registered Photo Album')
    try {
        let album = await Album.findById(req.params.id);

        if (!album) return res.status(404).json({ msg: 'Album not found' });

        await Album.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Album Removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;