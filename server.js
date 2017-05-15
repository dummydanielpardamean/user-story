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
 | Socket Configurations
 |--------------------------------------------------------------------------
 */
let http = require('http');
let server = http.createServer(app);
server.listen(3001);
let io = require('socket.io').listen(server);
io.on('connection', socket => {
    console.log("Socket connection with id '%s' was successfully created.", socket.conn.id);

    socket.on('client-to-server-new-story-added', socket => {
        console.log(socket);
        io.emit('server-to-client-new-story-added', socket);
    })
});

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
        console.log('Server is running on PORT %s', PORT);

    }
});
