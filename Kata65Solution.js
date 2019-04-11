// 65: Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` API overview', function(){
  const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
  let set ;
  beforeEach(function() {
    set = new Set(api);
  });
  it('a Set can be created from an array', function() {
    let set = new Set(api); /// called the api const in the new Set
    assert.deepEqual(Array.from(set), api);
  });
  it('`size` is the number of values', function() {
    const theSize = set.size; /// changed the variable from count to size
    assert.equal(theSize, api.length);
  });
  it('`add()` appends the given value', function() {
    // Hint: To make the content of `api` and `set` consistent you can add the
    // `Symbol.iterator` to the `set`. Strongly speaking it is missing in the API.
    set.add(1) /// added 1 to the set
    assert.equal(set.size, api.length + 1);
  });
  it('`clear()` removes all elements', function() {
    set.clear() /// cleared the set
    assert.equal(set.size, 0);
  });
  it('`delete()` removes the given value', function() {
    set.delete('entries') /// initiatied a method set.delete() to delete one entry from the api array.  this doesn't delete it from the original api array, but only from the set value
    assert.equal(set.size, api.length - 1);
  });
  it('`entries()` returns an iterator for all values', function() {
    const expectedEntries = api.map(entry => [entry, entry]);
    const actualEntries = set.entries(); /// changed the method from set.entry to set.entries()
    assert.deepEqual([...actualEntries], expectedEntries);
  });
  it('`forEach()` calls a callback for each value', function() {
    let values = [];
    set.forEach(value => { values.push(value); }); /// changed the set.map to set.forEach
    assert.deepEqual(values, api);
  });
  it('`has()` returns true if the given value is in the set', function() {
    const propertyName = 'add'; /// set propertyName = to one of the values in the api array so when set.has method is utilized and propertyName is called, the value matches true
    assert.equal(set.has(propertyName), true);
  });
  describe('returns an iterator that contains all values', function() {
    // In order to be alike to `Map`, `keys()` and `values()` are essentially the same thing for a `Set`.
    it('`keys()`', function() {
      const allKeys = set.keys(); /// fixed the method to set.keys()
      assert.deepEqual([...allKeys], api);
    });
    it('`values()`', function() {
      const allValues = set.values(); /// fixed the spelling of the method
      assert.deepEqual([...allValues], api);
    });
    it('`[Symbol.iterator]()`', function() {
      const iteratorKey = Symbol.iterator; /// set iteratorKey = Symbol.iterator
      assert.deepEqual([...set[iteratorKey]()], api);
    });
  });
});

//// BROKEN CODE BELOW
// 65: Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` API overview', function(){
  const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
  let set;
  beforeEach(function() {
    set = new Set(api);
  });
  it('a Set can be created from an array', function() {
    let set = new Set([]);
    assert.deepEqual(Array.from(set), api);
  });
  it('`size` is the number of values', function() {
    const theSize = set.count;
    assert.equal(theSize, api.length);
  });
  it('`add()` appends the given value', function() {
    // Hint: To make the content of `api` and `set` consistent you can add the
    // `Symbol.iterator` to the `set`. Strongly speaking it is missing in the API.
    
    assert.equal(set.size, api.length + 1);
  });
  it('`clear()` removes all elements', function() {
    
    assert.equal(set.size, 0);
  });
  it('`delete()` removes the given value', function() {
    
    assert.equal(set.size, api.length - 1);
  });
  it('`entries()` returns an iterator for all values', function() {
    const expectedEntries = api.map(entry => [entry, entry]);
    const actualEntries = set.entry;
    assert.deepEqual([...actualEntries], expectedEntries);
  });
  it('`forEach()` calls a callback for each value', function() {
    let values = [];
    set.map(value => { values.push(value); });
    assert.deepEqual(values, api);
  });
  it('`has()` returns true if the given value is in the set', function() {
    const propertyName = '';
    
    assert.equal(set.has(propertyName), true);
  });
  describe('returns an iterator that contains all values', function() {
    // In order to be alike to `Map`, `keys()` and `values()` are essentially the same thing for a `Set`.
    it('`keys()`', function() {
      const allKeys = Object.keys(set);
      assert.deepEqual([...allKeys], api);
    });
    it('`values()`', function() {
      const allValues = set.value();
      assert.deepEqual([...allValues], api);
    });
    it('`[Symbol.iterator]()`', function() {
      const iteratorKey = '???';
      assert.deepEqual([...set[iteratorKey]()], api);
    });
  });
});
