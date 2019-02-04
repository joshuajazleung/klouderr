const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    size: {
        type: String,
        required: true,
    },
    extension: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bucket: {
        type: String,
        required: true,
        max: 50
    },
    encodedName: {
        type: String,
        required: false,
        max: 100,
        default: null
    },
    removeCode: {
        type: String,
        required: false,
        max: 100,
        default: null
    },
    visitCount: {
        type: Number,
        required: false,
        default: 0
    },
    downloadCount: {
        type: Number,
        required: false,
        default: 0
    },
    lastDownloadedAt: {
        type: Date,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('file', fileSchema, 'files');
