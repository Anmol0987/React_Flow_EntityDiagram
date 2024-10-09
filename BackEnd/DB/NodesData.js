const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://ayush8388:VrwCQWOi5ZO1NtGV@cluter2.qfvyl.mongodb.net/?retryWrites=true&w=majority&appName=cluter2');

const NodesSchema = new mongoose.Schema({
    id: String,
    type: String,
    data: {
        label: String,
        components: [
            {
                id: String,
                name: String
            }
        ]
    },
    position: {
        x: Number,
        y: Number,
    }
});

module.exports = mongoose.model('Nodes', NodesSchema);