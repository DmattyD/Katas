// 52: Generator - Send value to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a value to a generator', () => {
  it('basics: get the values from a generator in two ways', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    // way #1
    var convertedToAnArray = Array.from(generatorFunction());
    // way #2
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value , iterator.next().value];  /// added .next().value after both iterator in the array to get the subsequent values
    assert.deepEqual(convertedToAnArray, iteratedOver);
  });
  it('pass a value to the iterator', function() {
    function* generatorFunction() {
      yield 1;
      yield 2; /// changed value from param to 2
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(2).value];
    assert.deepEqual([1, 2], iteratedOver);
  });
  it('a value passed to the 1st `next()` call is ignored', function() {
    function* generatorFunction() {
      yield 1;
      yield 2; /// added second value to the function to return the second next
    }
    let iterator = generatorFunction();
    const values = [
      iterator.next('irrelevant').value, 
      iterator.next(2).value
    ];
    assert.deepEqual(values, [1, 2]);
  });
});

/// BROKEN CODE BELOW
// 52: Generator - Send value to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a value to a generator', () => {
  it('basics: get the values from a generator in two ways', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    // way #1
    var convertedToAnArray = Array.from(generatorFunction());
    // way #2
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().___, iterator.___];
    assert.deepEqual(convertedToAnArray, iteratedOver);
  });
  it('pass a value to the iterator', function() {
    function* generatorFunction() {
      yield 1;
      yield param;
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(2).value];
    assert.deepEqual([1, 2], iteratedOver);
  });
  it('a value passed to the 1st `next()` call is ignored', function() {
    function* generatorFunction() {
      yield 1;
      
    }
    let iterator = generatorFunction();
    const values = [
      iterator.next('irrelevant').value, 
      iterator.next(2).value
    ];
    assert.deepEqual(values, [1, 2]);
  });
});
