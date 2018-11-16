class Game {
  constructor() {
    this.players = [];

  },


  enterName() {
    var name = {
      value: ""
    }
    const form = {
      field: document.getElementById('playername'),
      submit: document.getElementById('submit')
    }
    form.field.addEventListener('keydown', function(evt) {
      name.value = evt.target.value;
      form.field.value = evt.target.value;
    });
    form.submit.addEventListener('click', function() {
      //set the name
      console.log(name.value);
      name.value = evt.target.value;


      //pass in id and name
      let player = new Player()

    });
  }
}

//game class with methods for updating client view from server
