const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    price: Number
})

module.exports = moongoose.model('Book', bookSchema);