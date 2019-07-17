// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another using `extends`', () => {
  describe('the default super class is `Object`', () => {
    it('a `class A` is an instance of `Object`', () => {
      class A {}  /// changed let to class, added {} after A to extend class A to everything within
      assert.equal(new A() instanceof Object, true);
    });
    it('when B extends A, B is also instance of `Object`', () => {
      class A {}
      class B extends A{} /// added extends infront of A, everything in Class B is now an instance of Class A
      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
    it('a class can extend `null`, and is not an instance of Object', () => {
      class NullClass extends null {} /// changed extends Object to extends null
      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
  });
  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      class A {} /// changed let A to class A and added {}
      class B extends A {}
      assert.equal(new B() instanceof A, true);
    });
    it('extend over multiple levels', () => {
      class A {}
      class B extends A {} /// added class B which extends class A, transitive property
      class C extends B {}
      assert.equal(new C instanceof A, true);
    });
  });
});

/////// BROKEN CODE BELOW

// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another using `extends`', () => {
  describe('the default super class is `Object`', () => {
    it('a `class A` is an instance of `Object`', () => {
      let A
      assert.equal(new A() instanceof Object, true);
    });
    it('when B extends A, B is also instance of `Object`', () => {
      class A {}
      class B {}
      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
    it('a class can extend `null`, and is not an instance of Object', () => {
      class NullClass extends Object {}
      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
  });
  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      let A;
      class B extends A {}
      assert.equal(new B() instanceof A, true);
    });
    it('extend over multiple levels', () => {
      class A {}
      
      class C extends B {}
      assert.equal(new C instanceof A, true);
    });
  });
});
