// 62: Map - `has()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`map.has()` indicates whether an element with a key exists', function() {
  it('finds nothing in an empty map', function() {
    let map = new Map();
    const hasKey = map.has(void 0); /// fixed the spelling to acutally call the method map.has()
    assert.equal(hasKey, false);
  });
  it('finds an element by it`s key', function() {
    let map = new Map([['key', 'VALUE']]);
    const hasKey = map.has('key'); /// called the value 'key', which has been mapped with a key of 'VALUE'
    assert.equal(hasKey, true);
  });
  it('finds `undefined` as key too', function() {
    let map = new Map([[void 0, 'not defined key']]);
    const hasUndefinedAsKey = map.has(void 0); /// placed .has(void 0) after map to call the method and the value as defined above
    assert.equal(hasUndefinedAsKey, true);
  });
  it('does not coerce keys', function() {
    let map = new Map([['1', 'one']]); /// placed the number 1 into a string
    const findsStringOne = true;
    assert.equal(map.has('1'), findsStringOne);
  });
  it('after removal (using `map.delete(<key>)`) it doesnt find the element anymore', function() {
    let map = new Map([[1, 'one']]);
    map.delete(1); /// utilized the method to delete the key of 1, so it no longer has a key
    assert.equal(map.has(1), false);
  });
  it('adding an item (using `map.set(key, value)`) later will make `has()` return true', function() {
    let map = new Map();
    map.set(void 0, true); /// utilized the method map.set, and set void 0 a key of true
    assert.equal(map.has(void 0), true);
  });
});
 //// BROKEN CODE BELOW /// 
