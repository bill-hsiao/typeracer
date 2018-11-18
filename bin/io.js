function socketController(io, data) {
  //data parameter for passing in state changes etc

  function init() {
    io.on('connection', onConnect)
  }

  // io.on('connection', function (socket) {
  //   socket.broadcast.emit('user connected');
  // });

  function onConnect(client) {
    client.on('connect', newConnect)
  }

  function onConnect(socket) {
    socket.broadcast.emit('a user has connected');
    socket.on("newPlayer", newPlayer);
    socket.on("disconnect", onDisconnect);
    socket.on("newPlayer", newPlayer);
    socket.on("newClient", newConnect);
    socket.on("message", message)
    socket.on("haha", () => console.log('haha'))
    //client.on("something", doSomething)
    //game host can input paragraph
  }

  function newPlayer() {

  }

  function onDisconnect() {

  }

  function newConnect(playerId) {
    console.log(`client ${playerId} has connected`);
    //this.broadcast.emit(this.id)
    io.sockets.to(playerId).emit('receivePlayerId', {id: playerId});
  }


  function message(oops) {
    console.log(`${oops} called from io`);
  }

  return {
    init: init,
    newPlayer: newPlayer,
    onDisconnect: onDisconnect,
    newConnect: newConnect

  }

}

module.exports = socketController;

//rewrite this to export socketController
// module.exports = function (io) {
//
//   io.on('connection', function (socket) {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//       console.log(data);
//     });
//   });
//
//
//
//
//
//
// }
