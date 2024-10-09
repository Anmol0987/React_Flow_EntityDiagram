const mongoose = require('mongoose');

const EdgesSchema = new mongoose.Schema({
    id: String,
    source: String,
    target: String,
    markerEnd: {
        type: String
    },
    type: String,
    style: {
        stroke: String,
        strokeWidth: Number
    }
});

module.exports = mongoose.model('Edges', EdgesSchema);