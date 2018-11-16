function socketController(io, data) {
  //data parameter for passing in state changes etc

  function init() {
    io.on('connection', onConnect)
  }

  // io.on('connection', function (socket) {
  //   socket.broadcast.emit('user connected');
  // });

  function onConnect(socket) {
    socket.broadcast.emit('a user has connected');
    socket.on("newPlayer", newPlayer);
    socket.on("disconnect", onDisconnect);
    socket.on("newPlayer", newPlayer);
    socket.on("connect", newConnect);
    socket.on("message", message)
    //client.on("something", doSomething)
    //game host can input paragraph
  }

  function newPlayer() {
    console.log(`player ${this.id} has joined`);
    this.broadcast.emit('newPlayer', this.id)
  }

  function onDisconnect() {
    console.log(`player ${this.id} has disconnected`);

    this.broadcast.emit('remove player', this.id)
  }

  function newConnect() {
    console.log(this.id + 'hello');
    this.broadcast.emit(this.id)
  }

  function message(msg) {
    console.log(`${msg} called from io`);
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
