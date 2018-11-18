class Handler {
  constructor() {
    this._name = "";
  }

  name(id) {
    var name = {
      value: ""
    }
    this._name = true;

    const form = {
      field: document.getElementById('name_field'),
      submit: document.getElementById('name_submit')
    }


    form.field.addEventListener('keydown', function(evt) {
      name.value = evt.target.value;
      form.field.value = evt.target.value;
    });

    form.submit.addEventListener('click', function() {
      console.log(name.value);
      name.value = evt.target.value;
    });

    return name.value;
  },

  passData(targetClass, data) {
    targetClass.receive(data)
    console.log(targetClass);
  }
}
