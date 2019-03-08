// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
  it('takes a compare function', function() {
    const found = [true].find(item => item = true); /// added item => item to the find()
    assert.equal(found, true);
  });
  it('returns the first value found', function() {
    const found = [0, 2].find(item => item > 1); /// changed second item of array to '2'
    assert.equal(found, 2);
  });
  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === 9); //// changed the item to === to something not in the array
    assert.equal(found, void 0);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name}) => name === 'Alice'); /// chaged prototype to exactly equal a function that returns the exact value of 'Alice'.
    assert.equal(found, alice);
  });
});



////// BROKEN CODE BELOW
// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
  it('takes a compare function', function() {
    const found = [true].find(true);
    assert.equal(found, true);
  });
  it('returns the first value found', function() {
    const found = [0, 1].find(item => item > 1);
    assert.equal(found, 2);
  });
  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === 2);
    assert.equal(found, void 0);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name}) => name);
    assert.equal(found, alice);
  });
});
