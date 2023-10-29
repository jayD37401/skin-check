const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('client/build'));

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('offer', (data) => {
    io.to(data.target).emit('offer', data.offer);
  });

  socket.on('answer', (data) => {
    io.to(data.target).emit('answer', data.answer);
  });

  socket.on('ice-candidate', (data) => {
    io.to(data.target).emit('ice-candidate', data.candidate);
  });

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.room = roomId;
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
