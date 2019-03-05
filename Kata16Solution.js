// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Object literal properties may be computed values', () => {
  it('a computed property `x` needs to be surrounded by `[]`', () => {
    const propertyName = 'x';
    const obj = {[propertyName]: 1}; /// placed propertyName into array to assign x to obj.x
    assert.equal(obj.x, 1);
  });
  it('can also get a function assigned', () => {
    const key = 'func';
    const obj = {[key]() {return 'seven'}}; // placed () after [key] to have it act as a function
    assert.equal(obj.func(), 'seven');
  });
  it('the key may also be the result of a function call', () => {
    const getName = () => 'propertyName';
    const obj = getName(); {return 'seven'} /// pulled getName() from {[getName]} to make it initiate the function
    assert.equal(obj.propertyName(), 'seven');
  });
  it('the key can also be constructed by an expression', () => {
    const what = 'tyName'; /// changed Key to 'tyName' so it would add to end of proper in line
    const obj = {['proper' + what]: null};
    assert('propertyName' in obj);
  });
  it('accessor keys can be computed names too', () => {
    const obj = {
      get ['key']() {return 1}, //// changed set to get, removed _ from ()
      
    };
    assert.equal(obj.key, 1);
  });
});


//// BROKEN CODE BELOW

// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Object literal properties may be computed values', () => {
  it('a computed property `x` needs to be surrounded by `[]`', () => {
    const propertyName = 'x';
    const obj = {propertyName: 1};
    assert.equal(obj.x, 1);
  });
  it('can also get a function assigned', () => {
    const key = 'func';
    const obj = {[key]: 'seven'};
    assert.equal(obj.func(), 'seven');
  });
  it('the key may also be the result of a function call', () => {
    const getName = () => 'propertyName';
    const obj = {[getName]() {return 'seven'}};
    assert.equal(obj.propertyName(), 'seven');
  });
  it('the key can also be constructed by an expression', () => {
    const what = 'Key';
    const obj = {['proper' + what]: null};
    assert('propertyName' in obj);
  });
  it('accessor keys can be computed names too', () => {
    const obj = {
      set ['key'](_) {return 1},
      
    };
    assert.equal(obj.key, 1);
  });
});
