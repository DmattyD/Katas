// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generator - `yield` is used to pause and resume a generator function', () => {
  function* generatorFunction() {
    yield 'hello';
    yield 'world';
  }
  let generator;

  beforeEach(function() {
    generator = generatorFunction();
  });
  it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
    let values = Array.from(generator); /// changed the Array.from() to Array.from(generator) to call the function itself
    assert.deepEqual(values, ['hello', 'world']);
  });
  describe('after the first `generator.next()` call', function() {
    it('the value is "hello"', function() {
      const {value} = generator.next(); /// added () after .next
      assert.equal(value, 'hello');
    });
    it('and `done` is false', function() {
      const {done} = generator.next(); /// added .next() after generator to query the array if it is done after the value 'hello'
      assert.equal(done, false);
    });
  });
  describe('after the second `next()` call', function() {
    let secondItem;
    beforeEach(function() {
     
      secondItem = generator.next();
    });
    it('`value` is "world"', function() {
      let {value} = generator.next(); /// set value = generator.next() - this only works because it is scoped within the greater function
      assert.equal(value, 'world');
    });
    it('and `done` is still false', function() {
      const done = generator.next().done; /// set done = generator.next().done; - this returns false because the generator has gone to the second value of the array, but has not generated a empty value yet.
      assert.equal(done, false);
    });
  });
  describe('after stepping past the last element, calling `next()` that often', function() {
    it('`done` property equals true, since there is nothing more to iterator over', function() {
      generator.next();
      generator.next();
      let done = generator.next().done; /// added .next() bewtween generator and .done to reach into the values array and determine that there is no next value
      assert.equal(done, true);
    });
  });
});


//// BROKEN CODE BELOW
// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generator - `yield` is used to pause and resume a generator function', () => {
  function* generatorFunction() {
    yield 'hello';
    yield 'world';
  }
  let generator;

  beforeEach(function() {
    generator = generatorFunction();
  });
  it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
    let values = Array.from(generatorFunction);
    assert.deepEqual(values, ['hello', 'world']);
  });
  describe('after the first `generator.next()` call', function() {
    it('the value is "hello"', function() {
      const {value} = generator.next;
      assert.equal(value, 'hello');
    });
    it('and `done` is false', function() {
      const {done} = generator;
      assert.equal(done, false);
    });
  });
  describe('after the second `next()` call', function() {
    let secondItem;
    beforeEach(function() {
      
      secondItem = generator.next();
    });
    it('`value` is "world"', function() {
      let {value} = secondItem;
      assert.equal(value, 'world');
    });
    it('and `done` is still false', function() {
      const done = secondItem;
      assert.equal(done, false);
    });
  });
  describe('after stepping past the last element, calling `next()` that often', function() {
    it('`done` property equals true, since there is nothing more to iterator over', function() {
      generator.next();
      generator.next();
      let done = generator.done;
      assert.equal(done, true);
    });
  });
});
