// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', function(){
  it('`isInteger` is a static function on `Number`', function() {
    const whatType = 'function' /// set the variable equal to the string function
    assert.equal(typeof Number.isInteger, whatType);
  });
  describe('zero in different ways', function() {
    it('0 is an integer', function() {
      const zero = 0; /// changed null to 0
      assert(Number.isInteger(zero));
    });
    it('0.000', function() {
      const veryZero = 0.00000; /// removed the 1 at the end to make it a whole integer
      assert(Number.isInteger(veryZero));
    });
    it('the string "0" is NOT an integer', function() {
      const stringZero = '0'; /// changed the number to a string of 0 to equal assertion of false
      assert(Number.isInteger(stringZero) === false);
    });
  });
  describe('one in different ways', function() {
    it('0.111 + 0.889', function() {
      const rest = 0.889; /// fixed the math problem to return a value of 1.0
      assert(Number.isInteger(0.111 + rest));
    });
    it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
      const oneOrNot = 0.5 + 0.1 + 0.3; /// changed the numbers to return a non-integer value
      assert(Number.isInteger(oneOrNot) === false);
    });
    it('parseInt`ed "1" is an integer', function() {
      const convertedToInt = Number.parseInt('1.01'); /// added Int after parse to effect the value in the number() method
      assert(Number.isInteger(convertedToInt));
    });
  });
  describe('what is not an integer', function() {
    it('`Number()` is an integer', function() {
      const numberOne = Number(); /// added () after Number
      assert(Number.isInteger(numberOne));
    });
    it('`{}` is NOT an integer', function() {
      const isit = Number.isInteger({}); /// change .isWhat({}) to .isInteger({})
      assert(isit === false);
    });
    it('`0.1` is not an integer', function() {
      const isit = Number.isInteger(0.1); /// added .isInteger() method
      assert(isit === false);
    });
    it('`Number.Infinity` is not an integer', function() {
      const isit = Number.isInteger(Number.Infinity); /// replaced Max_Value with .Infinity
      assert(isit === false);
    });
    it('`NaN` is not an integer', function() {
      const isit = Number.isInteger(NaN); /// changed isFloat() to .isInteger()
      assert(isit === false);
    });
  });
});

//// BROKEN CODE BELOW
// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', function(){
  it('`isInteger` is a static function on `Number`', function() {
    const whatType = 'method';
    assert.equal(typeof Number.isInteger, whatType);
  });
  describe('zero in different ways', function() {
    it('0 is an integer', function() {
      const zero = null;
      assert(Number.isInteger(zero));
    });
    it('0.000', function() {
      const veryZero = 0.000001;
      assert(Number.isInteger(veryZero));
    });
    it('the string "0" is NOT an integer', function() {
      const stringZero = 0;
      assert(Number.isInteger(stringZero) === false);
    });
  });
  describe('one in different ways', function() {
    it('0.111 + 0.889', function() {
      const rest = 0.88;
      assert(Number.isInteger(0.111 + rest));
    });
    it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
      const oneOrNot = 0.5 + 0.2 + 0.3;
      assert(Number.isInteger(oneOrNot) === false);
    });
    it('parseInt`ed "1" is an integer', function() {
      const convertedToInt = Number.parse('1.01');
      assert(Number.isInteger(convertedToInt));
    });
  });
  describe('what is not an integer', function() {
    it('`Number()` is an integer', function() {
      const numberOne = Number;
      assert(Number.isInteger(numberOne));
    });
    it('`{}` is NOT an integer', function() {
      const isit = Number.isWhat({});
      assert(isit === false);
    });
    it('`0.1` is not an integer', function() {
      const isit = Number(0.1);
      assert(isit === false);
    });
    it('`Number.Infinity` is not an integer', function() {
      const isit = Number.isInteger(Number.MAX_VALUE);
      assert(isit === false);
    });
    it('`NaN` is not an integer', function() {
      const isit = Number.isFloat(NaN);
      assert(isit === false);
    });
  });
});
