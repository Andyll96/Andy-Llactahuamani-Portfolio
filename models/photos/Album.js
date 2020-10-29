// This file will determine the scheme/format of an item based to the albums database

const mongoose = require('mongoose');

const AlbumsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    dateTaken: {
        type: Date
    },
    uploadDate:{
        type: Date,
        default: Date.now
    },
    photoCount: {
        type: Number,
    },
    description: {
        type: String,
        required: true
    },
    images:[{ type : mongoose.Schema.Types.ObjectId, ref: 'Images' }]
});

module.exports = mongoose.model('albums', AlbumsSchema);