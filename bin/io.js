function socketController(io, data) {
  //data parameter for passing in state changes etc

  function init() {
    io.on('connection', onConnect)
  }
}

function onConnect(client) {
  client.on("disconnect", onDisconnect);
  //client.on("something", doSomething)
}

function onDisconnect() {
  //do something
}

//rewrite this to export socketController
module.exports = function (io) {

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });






}
