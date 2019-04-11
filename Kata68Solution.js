// 68: Reflect - construct 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'constructor'; /// fixed the spelling of constructor
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const expectedType = 'function'; /// Reflect is a type of function
      assert.equal(typeof Reflect.construct, expectedType)
    });
  });
  
  describe('the 1st parameter is the constructor to be invoked', function() {
    it('fails when given a number as constructor', function() {
      let aNumber = 1; /// set the variable aNumber = to a number, not class {}
      assert.throws(() => { Reflect.construct(aNumber, []) }, TypeError);
    });
    it('works given a function that can be instanciated', function() {
      let aFunction = () => {}; /// set aFunction equal to () => {} 
      assert.doesNotThrow(() => { Reflect.construct(aFunction, []) });
    });
    it('works given a class', function() {
      const aClass = class {}; /// added class in front of the object 
      assert.doesNotThrow(() => { Reflect.construct(aClass, []) });
    });
  });

  describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
    
    const aClass = class {};
    it('fails when it`s not an array(-like), e.g. a number', function() {
      let aNumber = 1; /// changed aNumber from equalling an array to equaling a number
      assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
    });
    it('works with an array-like object (the `length` property look up should not throw)', function() {
      let arrayLike = {get length() {}}; /// set the get length method equal to an empty object
      assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
    });
    it('works with a real array', function() {
      let realArray = []; /// set the variable equal to an array
      assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
    });
  });

  describe('in use', function() {
    it('giving it a class it returns an instance of this class', function() {
      class Constructable {}
      let instance = Reflect.construct(Constructable, []); /// called the class Constructable in Reflect.construct and set the argument as an array
      assert.equal(instance instanceof Constructable, true);
    });
    describe('the list of arguments are passed to the constructor as given', function() {
      class Constructable {
        constructor(...ar
        gs) { this.args = args; }
      }
      it('if none given, nothing is passed', function() {
        let instance = Reflect.construct(Constructable, []); /// removed the number argument from the array in the method
        assert.deepEqual(instance.args, []);
      });
      it('passing an array, all args of any type are passed', function() {
        const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
        let instance = Reflect.construct(Constructable, argumentsList); /// set instance equal to Reflect.construct(Constructable, argumentsList) - I called the class Constructable, and then passed the array of argumentsList by assigning argumentsList as the second parameter
        assert.deepEqual(instance.args, argumentsList);
      });
    });
  });

  describe('the length property', function() {
    it('of `Reflect.construct` is 2', function() {
      let expected=  2 /// set expected equal to 2
      assert.equal(Reflect.construct.length, expected);
    });
  });
});

/// BROKEN CODE BELOW
// 68: Reflect - construct 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'konstructor';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const expectedType = '???';
      assert.equal(typeof Reflect.construct, expectedType)
    });
  });
  
  describe('the 1st parameter is the constructor to be invoked', function() {
    it('fails when given a number as constructor', function() {
      let aNumber = class {};
      assert.throws(() => { Reflect.construct(aNumber, []) }, TypeError);
    });
    it('works given a function that can be instanciated', function() {
      let aFunction;
      assert.doesNotThrow(() => { Reflect.construct(aFunction, []) });
    });
    it('works given a class', function() {
      const aClass = {};
      assert.doesNotThrow(() => { Reflect.construct(aClass, []) });
    });
  });

  describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
    
    const aClass = class {};
    it('fails when it`s not an array(-like), e.g. a number', function() {
      let aNumber = [];
      assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
    });
    it('works with an array-like object (the `length` property look up should not throw)', function() {
      let arrayLike = {get length() { throw new Error(); }};
      assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
    });
    it('works with a real array', function() {
      let realArray = '';
      assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
    });
  });

  describe('in use', function() {
    it('giving it a class it returns an instance of this class', function() {
      class Constructable {}
      let instance = Reflect.construct; // use Reflect.construct here!!!
      assert.equal(instance instanceof Constructable, true);
    });
    describe('the list of arguments are passed to the constructor as given', function() {
      class Constructable {
        constructor(...args) { this.args = args; }
      }
      it('if none given, nothing is passed', function() {
        let instance = Reflect.construct(Constructable, [1]);
        assert.deepEqual(instance.args, []);
      });
      it('passing an array, all args of any type are passed', function() {
        const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
        let instance = Reflect.construct;
        assert.deepEqual(instance.args, argumentsList);
      });
    });
  });

  describe('the length property', function() {
    it('of `Reflect.construct` is 2', function() {
      let expected;
      assert.equal(Reflect.construct.length, expected);
    });
  });
});
