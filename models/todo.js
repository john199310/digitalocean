const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    action: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    data: {
        type: String,
        require: true
    },
})

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;