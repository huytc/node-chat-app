const socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: 'client',
        text: 'Hello huytc'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function (message) {
    console.log('Received new message:', JSON.stringify(message, undefined, 2));
});