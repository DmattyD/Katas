// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    const {x} = {x: 1}; /// added {} around const
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {first, second} = magic; /// restuructred const object to give variable position
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[x]} = {z: [ 42]}; //// made z an array of one value
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]]; /// matched layers of const
      assert.equal(lang, 'ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, y: 2}; /// removed z from object
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
      const {substr} = String(1);  /// made 1 into a prototype string
      assert.equal(substr, String.prototype.substr);
    });
  });
});

/// broken code below
// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    const x = {x: 1};
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {magic: [second]} = {magic};
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, z: 2};
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
      const {substr} = 1;
      assert.equal(substr, String.prototype.substr);
    });
  });
});
