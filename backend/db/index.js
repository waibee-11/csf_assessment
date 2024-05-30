const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:nI4PpT3NUtTjIdML@cluster0.s1bp51g.mongodb.net/csf_app');

const dataScema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
});

const User = mongoose.model('User', dataScema);

module.exports = {
    User
};