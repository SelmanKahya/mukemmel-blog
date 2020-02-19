const express = require('express');
const next = require('next');
const routes = require('../routes');
const mongoose = require('mongoose');
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);
const config = require('./config');

const blogRoutes = require('./routes/blog');


const bodyParser = require('body-parser');
const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecretData 2',
        description: 'My secret passwords'
    }
]

mongoose.connect(config.DB_URI, {useNewUrlParser: true})
    .then(()=> console.log('Database Connected'))
    .catch(err => console.error(err));

app.prepare()
.then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use('/api/v1/blogs', blogRoutes);

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
        return res.json(secretData);
    });
    server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
        console.log("girdim");
        return res.json(secretData);
    })
    server.get('*', (req, res)=>{
        return handle(req, res);
    })
    server.use(function (err, req, res, next) {

        console.log("niye girdim");

        if(err.name === 'UnauthorizedError'){
            res.status(401).send({
                title: 'Unauthorized',
                detail: 'Unauthorized Access!'
            });
        }
    })
    const PORT = process.env.PORT || 3000;
    server.use(handle).listen(PORT, (err)=> {
        if(err) throw err
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