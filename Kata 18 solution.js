// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('Rest parameters in functions', () => {
  it('must be the last parameter', () => {
    const fn = (...rest ) => { //// removed very last and made ...rest the only parameter, which calls on every other value in the function
      assert.deepEqual([1, 2], rest);
    };
    fn(1, 2);
  });
  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, ...rest) => { /// added ... in front of rest
      assert.deepEqual([3,4], rest);
    };
    fn(null, 2, 3, 4);
  });
  it('makes `arguments` obsolete', () => {
    const fn = (...args) => { //// added ...args to the fn =()
      assert.deepEqual([42, 'twenty three', 'win'], args);
    };
    fn(42, 'twenty three', 'win');
  });
  it('eliminate `arguments`!!!', () => {
    const fn = (...args) => args; /// shortened result of function to args, added ...args to function params
    const [firstArg, ...rest] = fn(1, 2, 3);
    assert.deepEqual([2, 3], rest);
  });
});


/////BROKEN CODE BELOW////
// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('Rest parameters in functions', () => {
  it('must be the last parameter', () => {
    const fn = (...rest, veryLast) => {
      assert.deepEqual([1, 2], rest);
    };
    fn(1, 2);
  });
  it('can be used to get all other parameters', () => {
    const fn = (firstParam, secondParam, rest) => {
      assert.deepEqual([3,4], rest);
    };
    fn(null, 2, 3, 4);
  });
  it('makes `arguments` obsolete', () => {
    const fn = () => {
      assert.deepEqual([42, 'twenty three', 'win'], args);
    };
    fn(42, 'twenty three', 'win');
  });
  it('eliminate `arguments`!!!', () => {
    const fn = () => arguments;
    const [firstArg, ...rest] = fn(1, 2, 3);
    assert.deepEqual([2, 3], rest);
  });
});
