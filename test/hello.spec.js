import User from '../src/js/app.js';

describe('User', function () {

  describe('defaults', function () {
    it('should should set the users name', function () {
      var user = new User('will');
      expect(user.name).toEqual('will');
    });

    it('should should provide a default name', function () {
      var user = new User();
      expect(user.name).toEqual('Anonymous');
    });
  });

  describe('speak', function () {
    it('should say hello to the user', function () {
      var user = new User('will');
      expect(user.speak()).toEqual('hello will');
    });
  });

  describe('fart', function () {
    it('should return a fart', function () {
      var user = new User('will');
      expect(user.fart()).toEqual('fart!');
    });

    it('should return a stinky fart if we set stinky param', function () {
      var user = new User('will');
      expect(user.fart(true)).toEqual('stinky fart');
    });
  });

});
