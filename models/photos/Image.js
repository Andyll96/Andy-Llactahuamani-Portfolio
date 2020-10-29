const mongoose = require('mongoose');

const ImagesSchema = mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    fileLocation: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },
    albumName: {
        type: String
    },
    dateTaken: {
        type: Date
    },
    fstop: {
        type: String
    },
    shutterSpeed: {
        type: String
    },
    iso: {
        type: Number
    },
    focalLength: {
        type: Number
    },
    resolution: [
        Number,
        Number
    ],
    camera: {
        type: String
    }

});

module.exports = mongoose.model('images', ImagesSchema);