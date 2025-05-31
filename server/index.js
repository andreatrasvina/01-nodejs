import express from 'express';
import logger from 'morgan';

import { Server } from 'socket.io';
import { createServer } from 'node:http';

const port = process.env.PORT ?? 3000;

const app = express(); //manejador de rutas http
const server = createServer(app); //el servidor http real, si hay peticion la manda a express para que la maneje
const io = new Server(server); //convierte el protocolo http a la conexion websocket despues del handshake

io.on('connection', (socket) => {
    console.log('a user has connected!!');
    
    socket.on('disconnect', () => {
        console.log('an user has disconnected');
    });
});

app.use(logger('dev'));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html');
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});