const RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $currentRoom: null,
  rooms: [],

  initialize: function () {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: () => {
    Rooms.retrieve().forEach((item) => {
      if (!RoomsView.rooms.includes(item)) {
        RoomsView.renderRoom(item);
      }
    });
    const options = RoomsView.$select.children();
    for (let i = 0; i < options.length; i++) {
      RoomsView.rooms.push(options[i].innerHTML);
    }
    RoomsView.$currentRoom = RoomsView.$select.find(':selected')[0].innerHTML;
  },

  renderRoom: (roomname) => {
    RoomsView.$select.append(`<option value=${roomname}>${roomname}</option>`);
  },

  handleChange: () => {
    RoomsView.render();
  },

  handleClick: () => {
    const roomname = prompt('Enter a room name');
    if (roomname) {
      Rooms.add(roomname);
      MessagesView.render();
      RoomsView.render();
    }
  }

};