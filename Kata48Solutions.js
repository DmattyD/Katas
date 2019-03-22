// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`add()` appends a new element to the end of a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('adds every value, of any type, only once', function() {
    const fn = () => {};
    set.add(1);
    set.add(1);
    set.add(fn);
    set.add(fn); /// pulled fn out of {} to set it equal to the previous add method
    assert.equal(set.size, 2);
  });
  it('is chainable', function() {
    set.add(1).add(2); /// added 2 unique values to the set.add.add chained methods
    assert.equal(set.has(2), true);
  });
  it('call without params adds undefined', function() {
    set.add(); /// added () after set.add to assign it as a void value
    assert.equal(set.has(void 0), true);
  });
  it('0, -0 and +0 are equal', function() {
    set.add(+0); /// placed +0 into the set.add
    set.add(-0); /// placed -0 into the set.add
    assert.equal(set.has(+0), true);
  });
});

/// BROKEN CODE BELOW
// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`add()` appends a new element to the end of a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('adds every value, of any type, only once', function() {
    const fn = () => {};
    set.add(1);
    set.add(1);
    set.add(fn);
    set.add({fn});
    assert.equal(set.size, 2);
  });
  it('is chainable', function() {
    set.add.add;
    assert.equal(set.has(2), true);
  });
  it('call without params adds undefined', function() {
    set.add
    assert.equal(set.has(void 0), true);
  });
  it('0, -0 and +0 are equal', function() {
    set.add();
    set.add();
    assert.equal(set.has(+0), true);
  });
});
