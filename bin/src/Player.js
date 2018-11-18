class Player {
  constructor(id) {
    this.game = null;
    this.id = id;
    this.name = null;

    this.progress = [];
  }
  receive(data) {
    let keyName = Object.keys(data);
    for (let key in data) {
      if (keyName[key] === 'name') {
        this.name = data.name
      } else if (keyName[key] === 'id') {
        this.id = data.id
      } else if (keyName[key] === 'game') {
        this.game = data.game
      }
      console.log(this.id);
    }
  }
}
