const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text:{
        type: String,
    }
});

module.exports = mongoose.model('ToDo', todoSchema)