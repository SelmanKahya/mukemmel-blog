const express = require('express');
const next = require('next');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);

const secretData = [
    {
        title: 'SecretData 1',
        description: 'PLans how to build spaceship'
    },
    {
        title: 'SecretData 1',
        description: 'My secret passwords'
    }
]
app.prepare()
.then(() => {
    const server = express();
    server.get('/api/v1/secret', (req, res) => {
        return res.json(secretData);
    });
    server.get('*', (req, res)=>{
        return handle(req, res);
    })
    server.use(handle).listen(3000, (err)=> {
        if(err) throw errconsole.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})

// const mongoose = require('mongoose');
// const config = require('./config');

// const Book = require('./models/book');

// mongoose.connect(config.DB_URI, {useNewUrlParser: true})
// .then(()=>console.log("database connected"))
// .catch(err=>console.error(err));

// app.prepare().then(()=> {

//     const server = express();

//     server.post('/api/v1/books', (req, res) => {
//         const bookData =  req.body;
//         const book = new Book(bookData);

//         book.save((err, createdBook => {
//             if(err){
//                 return res.status(422).send(err);
//             }
//             return res.json(createdBook);
//         }))
//     })
// });

// async() => (await mongoose.connect(config.DB_RUI, {useNewUrlParser: true}))();