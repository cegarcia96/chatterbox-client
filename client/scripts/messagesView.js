const MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', this.handleClick);
  },

  render: () => {
    MessagesView.$chats.empty();
    Messages.retrieve().forEach((message) => {
      if (message.roomname === RoomsView.$currentRoom) {
        MessagesView.renderMessage(message);
      }
    });
  },

  renderMessage: (obj) => {
    MessagesView.$chats.append(MessageView.render(obj));
  },

  handleClick: (e) => {
    const username = $(e.target).data('username');
    if (username === 'anonymous') {
      return;
    }
    Friends.toggleStatus(username, MessagesView.render);
  }

};