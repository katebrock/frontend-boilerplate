class User {
  constructor(name) {
    this.name = name || 'Anonymous';
  }

  speak() {
    return 'hello ' + this.name;
  }

  fart(stinky) {
    if (stinky) {
      return 'stinky fart';
    }

    return 'fart!';
  }
}

export default User;
