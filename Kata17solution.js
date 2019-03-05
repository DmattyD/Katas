// 17: unicode - in strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Unicode in strings', () => {
  it('are prefixed with `\\u` (one backslash and u)', () => {
    const nuclear = `\u2622`; //// added `\u to beginning of 2622 and closed off with `
    assert.equal(nuclear, '☢');
  });
  it('value is 4 bytes/digits', () => {
    const nuclear = '\u2622';  //// removed extra '2' from end of unicode string
    assert.equal(`no more ${nuclear}`, 'no more ☢');
  });
  it('even "normal" character`s values can be written as hexadecimal unicode', () => {
    const nuclear = `\u006e\u006f more \u2622`; /// changed `\u006A to u0063 and u006b to u006f`
    assert.equal(nuclear, 'no more ☢');
  });
  it('curly braces may surround the value', () => {
    const nuclear = `\u006E\u006F more \u2622`; //// removed u0063 from {} and shortened both to proper length of 4
    assert.equal(nuclear, 'no more ☢');
  });
});


/// BROKEN CODE BELOW

// 17: unicode - in strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Unicode in strings', () => {
  it('are prefixed with `\\u` (one backslash and u)', () => {
    const nuclear = 2622;
    assert.equal(nuclear, '☢');
  });
  it('value is 4 bytes/digits', () => {
    const nuclear = '\u26222';
    assert.equal(`no more ${nuclear}`, 'no more ☢');
  });
  it('even "normal" character`s values can be written as hexadecimal unicode', () => {
    const nuclear = `\u006B\u006A more \u2622`;
    assert.equal(nuclear, 'no more ☢');
  });
  it('curly braces may surround the value', () => {
    const nuclear = `\u{0000000006E}\u00006F more \u2622`;
    assert.equal(nuclear, 'no more ☢');
  });
});
