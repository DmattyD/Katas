// 69: Reflect - defineProperty 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.defineProperty()` is like `Object.defineProperty()` but returns a Boolean.', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'defineProperty'; /// called the name of the method 
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const expectedType = 'function'; // it is a function
      assert.equal(typeof Reflect.defineProperty, expectedType)
    });
  });
  
  describe('the 1st parameter is the object on which to define a property', function() {
    it('fails if it is not an object', function() {
      let noObj = 5; /// changed the variable from equalling {} to equalling a number
      assert.throws(() => { Reflect.defineProperty(noObj, 'property', {value: 'value'}); });
    });
    it('accepts an object', function() {
      let obj = {}; /// set it equal to an object
      assert.doesNotThrow(() => { Reflect.defineProperty(obj, 'property', {value: 'value'}); });
    });
    it('accepts an instance (of a class)', function() {
      let instance = class {}; /// set instance = to class {};
      assert.doesNotThrow(() => { Reflect.defineProperty(instance, 'property', {value: 'value'}); });
    });
  });

  describe('2nd parameter is the name of the property to be defined on the object (normally a string)', function() {
    it('works with a `normal` string', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {}); /// set the string as prop, which is what was called in the assertion statement
      assert.equal('prop' in obj, true);
    });
    it('a number gets converted into a string', function() {
      let obj = {};
      Reflect.defineProperty(obj, '1', {}); /// set the number = to a string as stated in the assertion statement
      assert.equal('1' in obj, true);
    });
    it('`undefined` also gets converted into a string (watch out!)', function() {
      let obj = {};
      let undef ; /// made undef a variable with no value
      Reflect.defineProperty(obj, undef, {});
      assert.equal('undefined' in obj, true);
    });
    it('it can be a symbol', function() {
      let obj = {};
      const sym = Symbol.for('prop');
      Reflect.defineProperty(obj, sym, {}); /// called the const sym in the reflect method
      assert.equal(sym in obj, true);
    });
  });

  describe('the `value` is part of the 3rd parameter, given as a property in an object `{value: ...}`', function() {
    // The entire complexity of the 3rd parameter might be covered in a later kata. 
    it('contains the initial value of the property, as an object in the property `value`', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {value:'property value'}); /// set the 3rd parameter to {value: 'property value'}
      assert.equal(obj.prop, 'property value');
    });
    it('can be of any type (even itself)', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {value: obj}); /// set 3rd parameter to {value: obj}
      assert.equal(obj.prop, obj);
    });
  });

  describe('the return value of the function indicates wether the property was defined successfully', function() {
    describe('returns true', function() {
      it('when the property was created (which requires the 3rd parameter too!!!)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {value: true}); /// completed the defineProperty method with instance as the first parameter, 'prop' as the second, and {value: true} as the third
        assert.equal(wasPropertyDefined, true);
      });
      it('no matter what the value of the property is (just the 3rd param has to exist as `{}`)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, 'ufvuk', {}); /// set up the parameters of the method and left the 3rd empty and the second as a stupid string
        assert.equal(wasPropertyDefined, true);
      });
    });
    describe('returns false', function() {
      it('when a non-configurable property wants to be changed to configurable=true', function() {
        let obj = {};
        Reflect.defineProperty(obj, 'x', {configurable: false});
        const wasPropertyDefined = Reflect.defineProperty(obj, 'x', {value: true}); /// set up the definePropertyMethod with the necessary parameters
        assert.equal(wasPropertyDefined, false);
      });
      it('when the object we want to add a property to is frozen', function() {
        let instance = new class {};
        Object.freeze(instance);
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {value: 1}); /// set the first parameter as instance
        assert.equal(wasPropertyDefined, false);
      });
    });
  });
});

/// BROKEN CODE BELOW ///

// 69: Reflect - defineProperty 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.defineProperty()` is like `Object.defineProperty()` but returns a Boolean.', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'what`s the functions name again? :)';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const expectedType = '';
      assert.equal(typeof Reflect.defineProperty, expectedType)
    });
  });
  
  describe('the 1st parameter is the object on which to define a property', function() {
    it('fails if it is not an object', function() {
      let noObj = {};
      assert.throws(() => { Reflect.defineProperty(noObj, 'property', {value: 'value'}); });
    });
    it('accepts an object', function() {
      let obj = '';
      assert.doesNotThrow(() => { Reflect.defineProperty(obj, 'property', {value: 'value'}); });
    });
    it('accepts an instance (of a class)', function() {
      let instance;
      assert.doesNotThrow(() => { Reflect.defineProperty(instance, 'property', {value: 'value'}); });
    });
  });

  describe('2nd parameter is the name of the property to be defined on the object (normally a string)', function() {
    it('works with a `normal` string', function() {
      let obj = {};
      Reflect.defineProperty(obj, '', {});
      assert.equal('prop' in obj, true);
    });
    it('a number gets converted into a string', function() {
      let obj = {};
      Reflect.defineProperty(obj, 2, {});
      assert.equal('1' in obj, true);
    });
    it('`undefined` also gets converted into a string (watch out!)', function() {
      let obj = {};
      let undef = 1;
      Reflect.defineProperty(obj, undef, {});
      assert.equal('undefined' in obj, true);
    });
    it('it can be a symbol', function() {
      let obj = {};
      const sym = Symbol.for('prop');
      Reflect.defineProperty(obj, 'prop', {});
      assert.equal(sym in obj, true);
    });
  });

  describe('the `value` is part of the 3rd parameter, given as a property in an object `{value: ...}`', function() {
    // The entire complexity of the 3rd parameter might be covered in a later kata. 
    it('contains the initial value of the property, as an object in the property `value`', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop');
      assert.equal(obj.prop, 'property value');
    });
    it('can be of any type (even itself)', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop');
      assert.equal(obj.prop, obj);
    });
  });

  describe('the return value of the function indicates wether the property was defined successfully', function() {
    describe('returns true', function() {
      it('when the property was created (which requires the 3rd parameter too!!!)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty();
        assert.equal(wasPropertyDefined, true);
      });
      it('no matter what the value of the property is (just the 3rd param has to exist as `{}`)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance);
        assert.equal(wasPropertyDefined, true);
      });
    });
    describe('returns false', function() {
      it('when a non-configurable property wants to be changed to configurable=true', function() {
        let obj = {};
        Reflect.defineProperty(obj, 'x', {configurable: false});
        const wasPropertyDefined = Reflect.defineProperty;
        assert.equal(wasPropertyDefined, false);
      });
      it('when the object we want to add a property to is frozen', function() {
        let instance = new class {};
        Object.freeze(instance);
        const wasPropertyDefined = Reflect.defineProperty({}, 'prop', {value: 1});
        assert.equal(wasPropertyDefined, false);
      });
    });
  });
});
