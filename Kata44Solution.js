// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
  it('`Map` is a new global constructor function', function() {
    const typeOfMap = 'function'; /// set it equal to string 'function'
    assert.equal(typeof Map, typeOfMap);
  });
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
    map.set('key', 'value'); /// replaced null with 'key'
    const value = map.get('key'); /// called 'key' in the map.get()
    assert.equal(value, 'value');
  });
  it('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
    const hasIt = map.has('key'); /// fixed spelling, placed 'key' into map.has
    assert.equal(hasIt, true);
  });
  it('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    const mapAsArray = Array.from(map); /// placed map into Array.from()
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });
  it('complex types can be keys', function() {
    const obj = {x: 1};
    const otherObj = {x: 1};
    let map = new Map();
    map.set(obj, '');
    
    assert.equal(map.has(otherObj), false); /// deleted map.set(otherObj) so that it returns the false, 'it hasn't been set to a key'
  });
});


///BROKEN CODE BELOW

// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
  it('`Map` is a new global constructor function', function() {
    const typeOfMap = '???';
    assert.equal(typeof Map, typeOfMap);
  });
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
    map.set('key', null);
    const value = map.get();
    assert.equal(value, 'value');
  });
  it('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
    const hasIt = map.hazz;
    assert.equal(hasIt, true);
  });
  it('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    const mapAsArray = map; // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });
  it('complex types can be keys', function() {
    const obj = {x: 1};
    const otherObj = {x: 1};
    let map = new Map();
    map.set(obj, '');
    map.set(otherObj, '');
    assert.equal(map.has(otherObj), false);
  });
});
