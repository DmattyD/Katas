// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    let number = (int=0) => int; /// assigned the function a parameter of 0
    assert.equal(number(), 0);
  });
  it('it is used when `undefined` is passed', function() {
    let number = (int = 23) => int;
    const param = 23; /// changed the parameter to 23 from 42
    assert.equal(number(param), 23);
  });
  it('it is not used when a value is given', function() {
    function xhr(method) { /// called the return in the function 
      return method;  
    }
    assert.equal(xhr('POST'), 'POST');
  });
  it('it is evaluated at run time', function() {
    let defaultValue;
    function xhr(method = `value: ${defaultValue=42}`) { /// assigned defaultValue a value of 42 in the function
      return method;  
    }
    assert.equal(xhr(), 'value: 42');
  });
  it('it can also be a function', function() {
    let defaultValue = 'defaultValue'; /// assigned the const a string value
    function fn(value = defaultValue) {
      return value;  
    }
    assert.equal(fn(), 'defaultValue');
  });
});

/// BROKEN CODE BELOW
// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    let number = (int) => int;
    assert.equal(number(), 0);
  });
  it('it is used when `undefined` is passed', function() {
    let number = (int = 23) => int;
    const param = 42;
    assert.equal(number(param), 23);
  });
  it('it is not used when a value is given', function() {
    function xhr() {
      return method;  
    }
    assert.equal(xhr('POST'), 'POST');
  });
  it('it is evaluated at run time', function() {
    let defaultValue;
    function xhr(method = `value: ${defaultValue}`) {
      return method;  
    }
    assert.equal(xhr(), 'value: 42');
  });
  it('it can also be a function', function() {
    const defaultValue = 0;
    function fn(value = defaultValue()) {
      return value;  
    }
    assert.equal(fn(), 'defaultValue');
  });
});
