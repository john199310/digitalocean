const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerTodo = require('./routes/api');
const routerAuth = require('./routes/apiPassword');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// connect to the database

mongoose
    .connect(
        process.env.ATLAS_URI, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        }
    )
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));


// since mongoose's promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*, CORS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type,Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.json());

app.use(cookieParser());

app.use('/api', routerTodo);
app.use('/auth', routerAuth);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.use((req, res, next) => {
    res.send('Welcome to Express');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});