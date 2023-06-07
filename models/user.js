const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "please provide email"],
        uniqued: [true, "email exist"]
    },
    password:{
        type: String,
        required : [true, 'please provide password'],
        uniqued: false,
    },
})


const User = mongoose.model('User', Schema);

module.exports = User;