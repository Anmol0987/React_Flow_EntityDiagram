const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://ayush8388:VrwCQWOi5ZO1NtGV@cluter2.qfvyl.mongodb.net/?retryWrites=true&w=majority&appName=cluter2');

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