const { request, response } = require('express');
const express = require('express');

const server = express();

server.get('/', (request, response) => {
    response.sendFile(__dirname + '/../front-end/index.html');
});

server.listen(3000);