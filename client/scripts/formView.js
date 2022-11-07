const FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: (e) => {
    e.preventDefault();
    const message = {
      username: App.username,
      roomname: RoomsView.$currentRoom || 'lobby',
      text: FormView.$form.find('#message').val()
    };

    Parse.create(message, (data) => {
      Object.assign(message, data);
      messageList.updateMessages(message);
    });
  },

  setStatus: (active) => {
    const status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};