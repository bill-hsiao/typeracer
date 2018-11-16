var socket = io.connect('http://localhost:3000');


//
// socket.on('connect', function (data, id) {
//   console.log('connected to sockets');
//   socket.emit('new Player', { my: 'data', id: id });
// });

socket.on('connect', onConnect);
socket.on('newPlayer', newPlayer);
socket.on('disconnect', onDisconnect);





function onConnect() {
  console.log(socket.id);
  socket.send(socket.id);
  console.log(this.id);
  console.log(this);
  socket.on('message', function(msg) {
    console.log(msg);
  })

}

function newPlayer() {
  socket.on('')
  this.broadcast.emit(socket.id)
}

function onDisconnect() {
  this.broadcast.emit(socket.id)
  this.emit(socket.id)
}
