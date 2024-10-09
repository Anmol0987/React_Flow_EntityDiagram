const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/systumm');

const NodesSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    type: {
        type: String,
        default: 'collapsibleNode'
    },
    data: {
        label: {
            type: String,
            default: 'Node'
        },
        components: [
            {
                id: {
                    type: String,
                },
                name: String
            }
        ]
    },
    position: {
        x: {type: Number, default: 100},
        y: {type:Number, default: 200},
    }
});

module.exports = mongoose.model('Nodes', NodesSchema);