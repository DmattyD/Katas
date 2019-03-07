// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class use `super` to access parent methods', () => {
  it('use of `super` without `extends` fails (already when transpiling)', () => {
    class A {hasSuper() { return false; }} /// because extends is not present and there isn't a second class, evaulating A with Super should return false; changed return super to return false
    assert.equal(new A().hasSuper(), false);
  });
  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return super.hasSuper(); }} /// added () to end of return to pass the hasSuper return true from line 11 down into class B
    assert.equal(new B().hasSuper(), true);
  });
  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return void 0; }} /// changed the return to 'return void 0' so as to stop class A from passing Super through to class B
    assert.equal(new B().hasSuper(), void 0);
  });
  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return true; }}
    class B extends A {}
    class C extends B {iAmSuper() { return super.iAmSuper(); }} /// added super in front of iAmSuper in the return statement to pass the super through from class A down to class C
    assert.equal(new C().iAmSuper(), true);
  });
  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    class B extends A {getMethod() { return super.object; }} /// changed return super.constructor to return super.object, Class A is an empty object, so changing the return to the object of class A returns an undefined object
    assert.equal(new B().getMethod(), void 0);
  });
});





////// BROKEN CODE BELOW 
// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class use `super` to access parent methods', () => {
  it('use of `super` without `extends` fails (already when transpiling)', () => {
    class A {hasSuper() { return super; }}
    assert.equal(new A().hasSuper(), false);
  });
  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return super.hasSuper; }}
    assert.equal(new B().hasSuper(), true);
  });
  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return 'nothing'; }}
    assert.equal(new B().hasSuper(), void 0);
  });
  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return true; }}
    class B extends A {}
    class C extends B {iAmSuper() { return iAmSuper(); }}
    assert.equal(new C().iAmSuper(), true);
  });
  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    class B extends A {getMethod() { return super.constructor; }}
    assert.equal(new B().getMethod(), void 0);
  });
});
