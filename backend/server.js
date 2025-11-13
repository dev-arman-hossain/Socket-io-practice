import { Server } from "socket.io";
import express from 'express';
import { createServer } from 'node:http';


const app = express();
const server = createServer(app);

const io = new Server(server,{
    cors: {
        origin: "*",
    }
});

const Room = "chat";

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('joinRoom', async(userName) => {
        console.log(`${userName} joined the room.`)
      await socket.join(Room);

      // Notify others in the room
      socket.to(Room).emit('roomNotice', userName);
    });
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});