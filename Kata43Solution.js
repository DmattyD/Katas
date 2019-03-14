// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', function() {
    const arr = []; /// set the Array arr to be empty, so that the next value would return voide and complete the boolean done as true
    const iterator = arr.values();
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('use `iterator.next()` to drop first value', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next(); /// added .next after iterator
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  it('empty array contains no values', function() {
    const arr = [...[...[...[]]]]; /// set the final array to be empty to meet the values.length parameter to 0
    const values = [...arr.values()];
    assert.equal(values.length, 0);
  });
  it('a sparse array without real values has values though', function() {
    const arr = [,,]; /// changed the second value to a comma to make it a sparse value
    const keys = [...arr.values()];
    assert.deepEqual(keys, [void 0, void 0]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a', ,'c']; /// added empty value between a & c which met the void 0 requirement of the test
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
});

///// BROKEN CODE BELOW
// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', function() {
    const arr = ['k', 'e', 'y'];
    const iterator = arr.values();
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('use `iterator.next()` to drop first value', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.___();
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  it('empty array contains no values', function() {
    const arr = [...[...[...[...'1']]]];
    const values = [...arr.values()];
    assert.equal(values.length, 0);
  });
  it('a sparse array without real values has values though', function() {
    const arr = [, 0];
    const keys = [...arr.values()];
    assert.deepEqual(keys, [void 0, void 0]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a',];
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
});
