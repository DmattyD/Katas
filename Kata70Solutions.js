// 70: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`clear()` removes all elements from a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('`set.size` becomes 0', function() {
    set.add('one').add(2);
    set.clear();
  
    var expectedSize = 0; /// assigned the value of 0 to expectedSize to equal set.size which is 0 due to being cleared above
    assert.equal(set.size, expectedSize);
  });
  it('the iterator `set.entries()` will not contain any items', function() {
    set.add('one').add(2);
    set.clear(); /// fixed the method to call the method by adding ()
    const {done} = set.entries().next();
    assert.equal(done, true);
  });
  it('any call to `set.has()` returns false', function() {
    set.add('one').add(2);
    set.clear(); /// cleared the set by calling set.clear()
    assert.deepEqual(set.has(2), false);
  });
  it('returns `undefined`', function() {
    set.clear() /// added set.clear() to ensure the object is empty
    var expectedReturn = undefined; /// assigned undefined to expectedReturn, thus passing the assertion test
    
    assert.equal(set.clear(), expectedReturn);
  });
});

//// BROKEN CODE BELOW  ///
// 70: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`clear()` removes all elements from a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('`set.size` becomes 0', function() {
    set.add('one').add(2);
    set.clear();
    var expectedSize;
    assert.equal(set.size, expectedSize);
  });
  it('the iterator `set.entries()` will not contain any items', function() {
    set.add('one').add(2);
    set.clear;
    const {done} = set.entries().next();
    assert.equal(done, true);
  });
  it('any call to `set.has()` returns false', function() {
    set.add('one').add(2);
    
    assert.deepEqual(set.has(2), false);
  });
  it('returns `undefined`', function() {
    var expectedReturn = true;
    assert.equal(set.clear(), expectedReturn);
  });
});
