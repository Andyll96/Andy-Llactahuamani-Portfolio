const express = require('express');
const router = express.Router();

// @route   POST api/albums
// @desc    Register Photo Album
// @access  Private
router.post('/', (req, res) => {
    res.send('Registered Photo Album')
});

// @route   GET api/albums
// @desc    Get Photo Album names
// @access  Public
router.get('/', (req, res) => {
    res.send('Retrieved Photo Albums')
});

// @route   DELETE api/albums
// @desc    Delete a Photo Album
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Registered Photo Album')
});

module.exports = router;