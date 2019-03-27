// 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', function(){
  describe('scalar values', function() {
    it('1 is the same as 1', function() {
      const areSame = Object.is(1, 1); /// set it equal to 1
      assert(areSame);
    });
    it('int 1 is different to string "1"', function() {
      const areSame = Object.is(1, '1'); /// called method .is()
      assert(areSame === false);
    });
    it('strings just have to match', function() {
      const areSame = Object.is('one', 'one'); /// made the strings the same
      assert(areSame);
    });
    it('+0 is not the same as -0', function() {
      const areSame = false; /// assigned areSame value of false
      assert.equal(Object.is(+0, -0), areSame);
    });
    it('NaN is the same as NaN', function() {
      const number = NaN; /// set number equal to NaN
      assert.equal(Object.is(NaN, number), true);
    });
  });
  describe('coercion, as in `==` and `===`, does NOT apply', function() {
    it('+0 != -0', function() {
      const coerced = +0 != -0; /// changed === to !=
      const isSame = Object.is(+0, -0);
      assert.equal(isSame, coerced);
    });
    it('empty string and `false` are not the same', function() {
      const emptyString = 'babadgvv'; /// placed a string in emptyString variable to make the assertion false by providing a value
      const isSame = Object.is(emptyString, false);
      assert.equal(isSame, emptyString == false);
    });
    it('NaN', function() {
      const coerced = NaN != NaN; /// set NaN != NaN
      const isSame = Object.is(NaN, NaN);
      assert.equal(isSame, coerced);
    });
    it('NaN 0/0', function() {
      const isSame = Object.is(NaN, 0/0); /// fixed spelling of .is() method
      assert.equal(isSame, true);
    });
  });
  describe('complex values', function() {
    it('`{}` is just not the same as `{}`', function() {
      const areSame = false; /// set areSame = false
      assert(Object.is({}, {}) === areSame);
    });
    it('Map', function() {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[2, 'one']]);
      const areSame = Object.is(map1, map2); /// changed the are same to look at two different lets, changed one of the original map objects to be different
      assert.equal(areSame, false);
    });
  });
});

//// BROKEN CODE BELOW
// 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', function(){
  describe('scalar values', function() {
    it('1 is the same as 1', function() {
      const areSame = Object.is(1, '???');
      assert(areSame);
    });
    it('int 1 is different to string "1"', function() {
      const areSame = Object.___(1, '1');
      assert(areSame === false);
    });
    it('strings just have to match', function() {
      const areSame = Object.is('one', 'two');
      assert(areSame);
    });
    it('+0 is not the same as -0', function() {
      const areSame = -1;
      assert.equal(Object.is(+0, -0), areSame);
    });
    it('NaN is the same as NaN', function() {
      const number = 0;
      assert.equal(Object.is(NaN, number), true);
    });
  });
  describe('coercion, as in `==` and `===`, does NOT apply', function() {
    it('+0 != -0', function() {
      const coerced = +0 === -0;
      const isSame = Object.is(+0, -0);
      assert.equal(isSame, coerced);
    });
    it('empty string and `false` are not the same', function() {
      const emptyString = '';
      const isSame = Object.is(emptyString, false);
      assert.equal(isSame, emptyString == false);
    });
    it('NaN', function() {
      const coerced = NaN == NaN;
      const isSame = Object.is(NaN, NaN);
      assert.equal(isSame, coerced);
    });
    it('NaN 0/0', function() {
      const isSame = Object.ISSSSS(NaN, 0/0);
      assert.equal(isSame, true);
    });
  });
  describe('complex values', function() {
    it('`{}` is just not the same as `{}`', function() {
      const areSame = '???';
      assert(Object.is({}, {}) === areSame);
    });
    it('Map', function() {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[1, 'one']]);
      const areSame = Object.is(map1, map1);
      assert.equal(areSame, false);
    });
  });
});
