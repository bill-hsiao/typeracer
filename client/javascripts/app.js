// (function nameGrabber() {
//   var submit = document.getElementById('submit');
//   submit.addEventListener('click', nameExtractor)
// })();
// function nameExtractor() {
//   var playerName = document.getElementById('playername');
//   console.log(playerName.);
// }






function enterName() {
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
    return name.value

  });
}
