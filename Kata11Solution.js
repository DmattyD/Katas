// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    let [a, b, c] = 'abc'; /// added array to let to equal the string
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    const [a, c] = 'ab'.split(); /// added split() method
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    const [space, coffee] = 'a \u{2615}'.slice(1); //// added .slice(1) 
    assert.equal(coffee, '\u{2615}');
  });
});


/// broken code below
// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    let a, b, c = 'abc';
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    const [a, c] = 'ab';
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    const [space, coffee] = 'a ☕';
    assert.equal(coffee, '\u{2615}');
  });
});
