// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
  const s = 'the string s';
  describe('the 1st parameter, the string to search for', function() {
    it('can be just a character', function() {
      const actual = s.startsWith('t'); /// fixed the spelling of the method.  This works because true starts with t, so that is how you assert they are equal
      assert.equal(actual, true);
    });
    it('can be a string', function() {
      const expected = true; /// set expected = true, and compares it to s - the string s, and the first parameter is the, so the compairson is true
      assert.equal(s.startsWith('the'), expected);
    });
    it('can contain unicode characters', function() {
      const nuclear = '☢ NO'; /// deleted the first NO to make nuclear start with the unicode sybmol
      assert.equal(nuclear.startsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = /.?g/; /// created an irregular expression to throw the error
      assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where to start searching from', function() {
    it('e.g. find "str" at position 4', function() {
      const position = 4; /// changed the position from 3 to 4, which is where string in 'the string s' starts
      assert.equal(s.startsWith('str', position), true);
    });
    it('for `undefined` is the same as 0', function() {
      const _undefined_ = 0; /// changed the variable to = 0
      assert.equal(s.startsWith('the', _undefined_), true);
    });
    it('the parameter gets converted to an int', function() {
      const position = '4'; /// placed a number into the string, so the string is reading as a string number, that is then converted into an integer
      assert.equal(s.startsWith('str', position), true);
    });
    it('a value larger than the string`s length, returns false', function() {
      const expected = false;  /// changed expected to equal false, so that (s.startsWith(' ', s.length +1) = false as described above
      assert.equal(s.startsWith(' ', s.length + 1), expected);
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      let aBool = false; /// set aBool = false;
      assert.equal(String.prototype.startsWith.call(aBool, 'false'), true);
    });
    it('e.g. a number', function() {
      let aNumber = '19'; /// set the number into a string
      assert.equal(String.prototype.startsWith.call(aNumber + 84, '1984'), true);
    });
    it('also using the position works', function() {
      const position = 1; /// changed the postion from index 0 to index 1
      assert.equal(String.prototype.startsWith.call(1994, '99', position), true);
    });
  });
});

//// BROKEN CODE BELOW ///
// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
  const s = 'the string s';
  describe('the 1st parameter, the string to search for', function() {
    it('can be just a character', function() {
      const actual = s.starts_with('t');
      assert.equal(actual, true);
    });
    it('can be a string', function() {
      const expected = '???';
      assert.equal(s.startsWith('the'), expected);
    });
    it('can contain unicode characters', function() {
      const nuclear = 'NO ☢ NO';
      assert.equal(nuclear.startsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = 'the';
      assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where to start searching from', function() {
    it('e.g. find "str" at position 4', function() {
      const position = 3;
      assert.equal(s.startsWith('str', position), true);
    });
    it('for `undefined` is the same as 0', function() {
      const _undefined_ = '1';
      assert.equal(s.startsWith('the', _undefined_), true);
    });
    it('the parameter gets converted to an int', function() {
      const position = 'four';
      assert.equal(s.startsWith('str', position), true);
    });
    it('a value larger than the string`s length, returns false', function() {
      const expected = true;
      assert.equal(s.startsWith(' ', s.length + 1), expected);
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      let aBool;
      assert.equal(String.prototype.startsWith.call(aBool, 'false'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 19;
      assert.equal(String.prototype.startsWith.call(aNumber + 84, '1984'), true);
    });
    it('also using the position works', function() {
      const position = 0;
      assert.equal(String.prototype.startsWith.call(1994, '99', position), true);
    });
  });
});
