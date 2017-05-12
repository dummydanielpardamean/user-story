let express = require('express');
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let path = require('path');

let config = require('./config');

let PORT = config.port;
let mongodb = config.database;
let app = express();

/*
 |--------------------------------------------------------------------------
 | Connect to MongoDB
 |--------------------------------------------------------------------------
 */
mongoose.connect(mongodb, (err) => {
    if (err) {
        throw err;
    }
});

/*
 |--------------------------------------------------------------------------
 | Midllewares
 |--------------------------------------------------------------------------
 */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client/dist')));

/*
 |--------------------------------------------------------------------------
 | Routes
 |--------------------------------------------------------------------------
 */
app.use('/api', require('./routes/api'));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Send index.html for every request
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public/src/index.html'));
});

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started on port %s', PORT);

    }
});
