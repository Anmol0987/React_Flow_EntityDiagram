const mongoose = require('mongoose');

const EdgesSchema = new mongoose.Schema({
    id: String,
    source: String,
    target: String,
    markerEnd: {
        type: {
            type: String,
            default: 'arrowclosed',
        }
    },
    type: {
        type: String,
        default: 'smoothstep'
    },
    style: {
        stroke: {
            type: String,
            default: 'green'
        },
        strokeWidth: {
            type: Number,
            default: 2
        }
    }
});

module.exports = mongoose.model('Edges', EdgesSchema);