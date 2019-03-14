// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.entries()); /// added .entries to arr.___() after Array.from()
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  it('empty elements contain the value `undefined`', function() {
    const arr = ['one'];
    arr[2] = 'three';
    let entries = arr.entries();
    const firstValue = entries.next().value;
    const secondValue = entries.next().value;
    //// set entries = arr.entries()
    /// created const first value = next entry value
    /// set secondValue = next entry value after first value
    
    assert.deepEqual(secondValue, [1, void 0]);
  });
  describe('returns an iterable', function() {
    it('has `next()` to iterate', function() {
      const arr = ['one'];
      const value = arr.entries().next().value; /// added '.entries().next().value' to end of arr
      assert.deepEqual(value, [0, 'one']);
    });
  });
});

/// BROKEN CODE BELOW
// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.___());
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  it('empty elements contain the value `undefined`', function() {
    const arr = ['one'];
    arr[2] = 'three';
    const secondValue = arr.entries();
    assert.deepEqual(secondValue, [1, void 0]);
  });
  describe('returns an iterable', function() {
    it('has `next()` to iterate', function() {
      const arr = ['one'];
      const value = arr;
      assert.deepEqual(value, [0, 'one']);
    });
  });
});

