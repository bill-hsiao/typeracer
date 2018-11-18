var socket = io.connect('http://localhost:3000');


//
// socket.on('connect', function (data, id) {
//   console.log('connected to sockets');
//   socket.emit('new Player', { my: 'data', id: id });
// });

socket.on('connect', onConnect);

socket.on('disconnect', onDisconnect);

socket.on('newPlayer', newPlayer);

socket.on('receivePlayerId', newPlayer);





function onConnect() {
  let playerId = socket.id;
  if (!playerId) {
    return
  }
  socket.emit('newClient', playerId);
  //socket.send(socket.id);
  //
  // console.log(this);
  // socket.on('haha', function(msg) {
  //   console.log(msg);
  // })

}

function newPlayer(playerId) {
  console.log(playerId.id);
  //socket.on('')
  //this.broadcast.emit(socket.id)
}

function onDisconnect() {
  this.broadcast.emit(socket.id)
  this.emit(socket.id)
}
