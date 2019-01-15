const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
    console.log('New user connected.');

    socket.emit('newMessage', {
        from: 'huytc',
        text: 'Hello from server',
        createdAt: Date.now()
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected.');
    });

    socket.on('createMessage', message => {
        console.log('New message created:', JSON.stringify(message, undefined, 2));
    });
});

server.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});