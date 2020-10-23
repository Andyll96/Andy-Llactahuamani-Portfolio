const express = require('express');
const router = express.Router();

// @route   POST api/album
// @desc    Register a Photo into an Album
// @access  Public
router.post('/', (req, res) => {
    res.send('Registered photo into Album')
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