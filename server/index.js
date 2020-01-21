const mongoose = require('mongoose');
const config = require('./config');

const Book = require('./models/book');

mongoose.connect(config.DB_URI, {useNewUrlParser: true})
.then(()=>console.log("database connected"))
.catch(err=>console.error(err));

// async() => (await mongoose.connect(config.DB_RUI, {useNewUrlParser: true}))();