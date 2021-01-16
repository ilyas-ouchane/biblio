const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookId: {
        type: String,
        trim: true,
        required: true
    } 
});

module.exports = mongoose.model('book',bookSchema);