const Messages = {

  _data: [],
  _latestData: 0,

  sort: (newData) => {
    Messages._data = Messages._data.concat(newData.reduce((acc, message) => {
      if (!message.text || message.text.length <= 0) {
        return acc;
      }
      message.roomname = message.roomname.toLowerCase();
      Messages.compare(message);
      Rooms.add(message.roomname);
      return acc.push(message) && acc;
    }, []));
  },

  updateMessages: (data) => {
    if (Messages._latestData === 0) {
      Messages.sort(data);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i]['message_id'] === Messages._latestData) {
        Messages.sort(data.slice(0, i));
        return;
      }
    }
  },

  compare: (message) => {
    if (!message.roomname || !message.roomname[0]) {
      message.roomname = 'lobby';
    }
    if (!message.username || !message.username[0]) {
      message.username = 'anonymous';
    }
    if (Messages._latestData < message['message_id']) {
      Messages._latestData = message['message_id'];
      Rooms._latestData = message['message_id'];
    }
  },

  retrieve: () => {
    return Messages._data;
  },

  checkLatest: (messageID) => {
    return Messages._latestData < messageID;
  }

};