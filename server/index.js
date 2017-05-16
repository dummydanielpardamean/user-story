import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import SocketIO from 'socket.io'

import { PORT, databaseURI } from './config';

let app = express();

/*
 |--------------------------------------------------------------------------
 | Socket Configurations
 |--------------------------------------------------------------------------
 */
let server = http.createServer(app);
server.listen(3001);
let io = SocketIO.listen(server);
io.on('connection', function(socket) {
    console.log("Socket connection with id '%s' was successfully created.", socket.conn.id);

    socket.on('client-to-server-new-story-added', function (socket) {
        console.log(socket);
        io.emit('server-to-client-new-story-added', socket);
    });
});

/*
 |--------------------------------------------------------------------------
 | Connect to MongoDB
 |--------------------------------------------------------------------------
 */
mongoose.connect(databaseURI, (err) => {
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
app.use(express.static(path.join(__dirname, '../client/dist')));

/*
 |--------------------------------------------------------------------------
 | Routes
 |--------------------------------------------------------------------------
 */
app.use('/api', require('./routes/api'));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running on PORT %s', PORT);

    }
});