const Friends = {

  _storage: new Set(),

  items: () => {
    return [...Friends._storage];
  },

  isFriend: (name) => {
    return Friends._storage.has(name);
  },

  toggleStatus: (name, callback = () => {}) => {
    if (Friends.isFriend(name)) {
      Friends._storage.delete(name);
      callback(false);
    } else {
      Friends._storage.add(name);
      callback(true);
    }
  }

};