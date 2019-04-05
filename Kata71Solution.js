// 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.repeat(x)` concatenates `x` copies of `str` and returns it', function() {
  describe('the 1st parameter the count', function() {
    it('if missing, returns an empty string', function() {
      const what = 'one'.repeat(); /// removed the value from .repeat() so that it will return an empty string
      assert.equal(what, '');
    });
    it('when `1`, the string stays the same', function() {
      const what = 'one'.repeat(1); /// placed 1 into the .repeat() method
      assert.equal(what, 'one');
    });
    it('for `3` the string `x` becomes `xxx`', function() {
      const actual = 'x'.repeat(3); /// changed the method to lowercase and changed repeat(1) to repeat(3)
      assert.equal(actual, 'xxx');
    });
    it('for `0` an empty string is returned', function() {
      const repeatCount = 0; /// changed repeatCount to equal 0
      assert.equal('shrink'.repeat(repeatCount), '');
    });
    describe('the count is not a number', () => {
      it('such as a string "3", it gets converted to an int', function() {
        const repeated = 'three'.repeat('3'); /// changed 'three.repeat('2') to 'three.repeat('3') as the string in .repeat needed to be changed to 3
        assert.equal(repeated, 'threethreethree');
      });
      it('a hex looking number as a string "0xA", it gets converted to an int', function() {
        const repeated = 'x'.repeat('0xA'); /// added x between 'OA' to make it a hex number type
        assert.equal('xxxxxxxxxx', repeated);
      });
      it('and does not look like a number, it behaves like 0', function() {
        const repeated = ''.repeat('23'); /// made the string that was being repeated empty
        assert.equal('', repeated);
      });
    });
  });
  describe('throws an error for', function() {
    it('a count of <0', function() {
      const belowZero = -1; /// made the const less than 0 so that an error is thrown
      assert.throws(() => { ''.repeat(belowZero); }, RangeError);
    });
    it('a count of +Infinty', function() {
      let infinity = '+Infinity'; /// capitalized Infinity and added plus symbol to reference the number infinity in the const infinity
      assert.throws(() => { ''.repeat(infinity); }, RangeError);
    });
  });
  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      let aBool = false; /// changed the boolean from true to false so that it will be repeated twice in String.prototype.repeat.call(aBool, 2) equalling falsefalse
      assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
    });
    it('e.g. a number', function() {
      let aNumber = 1; /// set aNumber = 1, so that when it is called twice, it will result in 11 (this is not eleven, but 1 repeated twice in a string)
      assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
    });
  });
  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }
      const expectedString = 'my string'; /// set expectedString = 'my string' so that when (new MyString()) is repeated only once, it matches the value of expectedString
      assert.equal(String(new MyString()).repeat(1), expectedString);
    });
    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }
      let repeated = String(new X()).repeat(2);  /// called the String() method around new X() and before the .repeat(2);
      assert.equal(repeated, '11');
    });
  });
});
 
 //// BROKEN CODE BELOW ///
 // 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.repeat(x)` concatenates `x` copies of `str` and returns it', function() {
  describe('the 1st parameter the count', function() {
    it('if missing, returns an empty string', function() {
      const what = 'one'.repeat(23);
      assert.equal(what, '');
    });
    it('when `1`, the string stays the same', function() {
      const what = 'one'.repeat();
      assert.equal(what, 'one');
    });
    it('for `3` the string `x` becomes `xxx`', function() {
      const actual = 'x'.REPEAT(1);
      assert.equal(actual, 'xxx');
    });
    it('for `0` an empty string is returned', function() {
      const repeatCount = 1;
      assert.equal('shrink'.repeat(repeatCount), '');
    });
    describe('the count is not a number', () => {
      it('such as a string "3", it gets converted to an int', function() {
        const repeated = 'three'.repeat('2');
        assert.equal(repeated, 'threethreethree');
      });
      it('a hex looking number as a string "0xA", it gets converted to an int', function() {
        const repeated = 'x'.repeat('0A');
        assert.equal('xxxxxxxxxx', repeated);
      });
      it('and does not look like a number, it behaves like 0', function() {
        const repeated = 'x'.repeat('23');
        assert.equal('', repeated);
      });
    });
  });
  describe('throws an error for', function() {
    it('a count of <0', function() {
      const belowZero = 1;
      assert.throws(() => { ''.repeat(belowZero); }, RangeError);
    });
    it('a count of +Infinty', function() {
      let infinity = 'infinity';
      assert.throws(() => { ''.repeat(infinity); }, RangeError);
    });
  });
  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      let aBool = true;
      assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
    });
    it('e.g. a number', function() {
      let aNumber;
      assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
    });
  });
  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }
      const expectedString = '';
      assert.equal(String(new MyString()).repeat(1), expectedString);
    });
    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }
      let repeated = new X().repeat(2);
      assert.equal(repeated, '11');
    });
  });
});
