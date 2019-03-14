// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {
  it('`keys()` returns an iterator', function() {
    const arr = ['a', ]; /// removed the second value from Array arr so as only one value is present in the array
    const iterator = arr.keys();
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('gets all keys', function() {
    const arr = ['a', 'b', 'c']; /// added value 'c' to get a 3rd key/value pair
    const keys = Array.from(arr.keys());
    assert.deepEqual(keys, [0, 1, 2]);
  });
  it('empty array contains no keys', function() {
    const arr = []; /// set arr to equal an empty array
    const keys = [...arr.keys()];
    assert.equal(keys.length, 0);
  });
  it('a sparse array without real values has keys though', function() {
    const arr = [,,];
    const keys = [...arr.keys()]; /// added .keys to ...arr___() to reference the commas in the arr = [,,]
    assert.deepEqual(keys, [0, 1]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a', , 'c'];
    const keys = Array.from(arr.keys()); /// set arr.keys to be in method Array.from so as to create an array for the keys to reference
    assert.deepEqual(keys, [0, 1, 2]);
  });
});


//// BROKEN CODE BELOW
// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {
  it('`keys()` returns an iterator', function() {
    const arr = ['a', 'b'];
    const iterator = arr.keys();
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('gets all keys', function() {
    const arr = ['a', 'b'];
    const keys = Array.from(arr.keys());
    assert.deepEqual(keys, [0, 1, 2]);
  });
  it('empty array contains no keys', function() {
    const arr = ['empty me'];
    const keys = [...arr.keys()];
    assert.equal(keys.length, 0);
  });
  it('a sparse array without real values has keys though', function() {
    const arr = [,,];
    const keys = [...arr.___()];
    assert.deepEqual(keys, [0, 1]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a', , 'c'];
    const keys = arr.keys;
    assert.deepEqual(keys, [0, 1, 2]);
  });
});
