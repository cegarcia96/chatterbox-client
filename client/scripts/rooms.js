const Rooms = {
  _data: new Set(),
  _latestData: 0,

  add: (roomname) => {
    Rooms._data.add(roomname.toLowerCase());
  },

  retrieve: () => {
    return Rooms._data;
  }

};