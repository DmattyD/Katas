// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      const expectedType = 'object'; /// Changed expectedType to 'object'
      assert.equal(typeof Reflect, expectedType);
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      const tryToConstruct = () => {new Reflect(); }; /// added new in front of Reflect
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      const expected = 'undefined'; /// set expected equal to undefined
      assert.equal(typeof Reflect.call, expected);
    });
  });
  
  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      let Class = class {}; /// set class = class {} so that it is a new instance.
      Reflect.construct(Class, []);
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 23}; /// changed x from 42 to 23
      Reflect.get(obj); // intiated Reflect.get(obj) to call the object from above
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x: ''} ;/// assigned x value 
      Reflect.has(obj) /// called method Reflect.has(obj) to determine if the object x is true
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});

/// BROKEN CODE BELOW
// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      const expectedType = 'not a function!';
      assert.equal(typeof Reflect, expectedType);
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      const tryToConstruct = () => { Reflect; };
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      const expected = 'function';
      assert.equal(typeof Reflect.call, expected);
    });
  });
  
  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      let Class;
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 42};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {};
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});
