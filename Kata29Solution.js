// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.from` converts an array-like object or list into an Array', () => {
  const arrayLike = {0: 'one', 1: 'two', length: 2};
  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike); /// added Array.from infront of arrayLike to call it
    assert.deepEqual(arr, ['one', 'two']);
  });
  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    const classList = Array.from(domNode.classList); /// added Array.from infront of (domNode.classList)
    assert.equal(''+classList, ''+['some', 'other']);
  });
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.createElement('span');
    const divs = Array.from(nodeList).filter((node) => node.tagName === 'div'); /// added () around nodeList and Added.from in front of it to Make and array from nodeList
    assert.deepEqual(divs.length, 0);
  });
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value.toUpperCase()); /// added .toUppercase to the return value to reference the lowercase values from const arrayLike from above
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });
    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(arrayLike, (value, key) => `${key}=${value}`); /// added key to the params of arrayLike as the second paramater
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
});


//// BROKEN CODE BELOW
// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.from` converts an array-like object or list into an Array', () => {
  const arrayLike = {0: 'one', 1: 'two', length: 2};
  it('call `Array.from` with an array-like object', function() {
    const arr = arrayLike;
    assert.deepEqual(arr, ['one', 'two']);
  });
  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    const classList = domNode.classList;
    assert.equal(''+classList, ''+['some', 'other']);
  });
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.createElement('span');
    const divs = nodeList.filter((node) => node.tagName === 'div');
    assert.deepEqual(divs.length, 0);
  });
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value);
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });
    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(arrayLike, (value) => `${key}=${value}`);
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
});
