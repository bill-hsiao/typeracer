const Player = require('./Player')
const Paragraph = require('./Paragraph')

//game class will keep track of the game state and game round
//game on server: game logic and updating data for client side
class Game {
  constructor() {
    this.players = [];
  }
  newPlayer() {
    let player = new Player()
  }
}
