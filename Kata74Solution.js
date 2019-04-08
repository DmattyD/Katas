// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`', function() {
  const s = 'el fin';
  describe('the 1st parameter the string to search for', function() {
    it('can be a character', function() {
      const doesEndWith = s.endsWith('n'); /// fixed the method to be the endsWith() method
      assert.equal(doesEndWith, true);
    });
    it('can be a string', function() {
      const expected = true; /// made expected equal to true to match the value of s.endsWith('fin') of true
      assert.equal(s.endsWith('fin'), expected);
    });
    it('can contain unicode characters', function() {
      const nuclear = 'NO ☢ Oh NO! ☢';  /// placed the ☢ at the end of the string to make the method true;
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = /^.+@.+$/; /// created a regExp
      assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where the search ends (as if the string was only that long)', function() {
    it('find "el" at a substring of the length 2', function() {
      const endPos = 2; /// changed the endPos to 2
      assert.equal(s.endsWith('el', endPos), true);
    });
    it('`undefined` uses the entire string', function() {
      const _undefined_ = undefined; /// assigned the variable _undefined_ as equal to undefined
      assert.equal(s.endsWith('fin', _undefined_), true);
    });
    it('the parameter gets coerced to an integer (e.g. "5" becomes 5)', function() {
      const position = '5'; /// replaced the written number 5 with the integer 5 in the string
      assert.equal(s.endsWith('fi', position), true);
    });
    describe('value less than 0', function() {
      it('returns `true`, when searching for an empty string', function() {
        const emptyString = ''; /// made the string empty
        assert.equal('1'.endsWith(emptyString, -1), true);
      });
      it('return `false`, when searching for a non-empty string', function() {
        const notEmpty = '-1'; /// made the string -1
        assert.equal('1'.endsWith(notEmpty, -1), false);
      });
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      let aBool = 'lse'; /// made the varialbe aBool end with the string 'lse' per the assertion statement
      assert.equal(String.prototype.endsWith.call(aBool, 'lse'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 1984; //// followed the directions of the assertion statement and made aNumber = 1984
      assert.equal(String.prototype.endsWith.call(aNumber + 1900, 84), true);
    });
    it('also using the position works', function() {
      const position = 3; /// called the ending possition of the assertion statement to equal true (sidenote: I believe this to be wrong because 99 is not the end position of 1994, and the index position of 3 would reference the 4 in 1994, thus making the statment false, but position 3 is what passes the test.)
      assert.equal(String.prototype.endsWith.call(1994, '99', position), true);
    });
  });
});

/// BROKEN CODE BELOW ///   
// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`', function() {
  const s = 'el fin';
  describe('the 1st parameter the string to search for', function() {
    it('can be a character', function() {
      const doesEndWith = s.doesItReallyEndWith('n');
      assert.equal(doesEndWith, true);
    });
    it('can be a string', function() {
      const expected = false;
      assert.equal(s.endsWith('fin'), expected);
    });
    it('can contain unicode characters', function() {
      const nuclear = 'NO ☢ Oh NO!';
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = '/the/';
      assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where the search ends (as if the string was only that long)', function() {
    it('find "el" at a substring of the length 2', function() {
      const endPos = 0;
      assert.equal(s.endsWith('el', endPos), true);
    });
    it('`undefined` uses the entire string', function() {
      const _undefined_ = 'i would like to be undefined';
      assert.equal(s.endsWith('fin', _undefined_), true);
    });
    it('the parameter gets coerced to an integer (e.g. "5" becomes 5)', function() {
      const position = 'five';
      assert.equal(s.endsWith('fi', position), true);
    });
    describe('value less than 0', function() {
      it('returns `true`, when searching for an empty string', function() {
        const emptyString = '??';
        assert.equal('1'.endsWith(emptyString, -1), true);
      });
      it('return `false`, when searching for a non-empty string', function() {
        const notEmpty = '';
        assert.equal('1'.endsWith(notEmpty, -1), false);
      });
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      let aBool = true;
      assert.equal(String.prototype.endsWith.call(aBool, 'lse'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 0;
      assert.equal(String.prototype.endsWith.call(aNumber + 1900, 84), true);
    });
    it('also using the position works', function() {
      const position = '??';
      assert.equal(String.prototype.endsWith.call(1994, '99', position), true);
    });
  });
});
