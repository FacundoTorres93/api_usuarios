const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

//exportando modelo de dato de un usuario
module.exports = mongoose.model('User', userSchema);