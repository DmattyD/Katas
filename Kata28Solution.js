// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class`s constructor `super()` can be used', () => {
  it('`extend` a class and use `super()` to call the parent constructor', () => {
    class A {constructor() { this.levels = 1; }}
    class B extends A { /// added extends A to reach classB into Class A 
      constructor() {
        super(); /// added super(); to reach out to class A
        this.levels++;
      }
    }
    assert.equal(new B().levels, 2);
  });
  it('`super()` may also take params', () => {
    class A {constructor(startValue=42, addTo=2) { this.counter = startValue + addTo; }} ///changed StartValueto = 42 and addTo = 2
    class B extends A { 
      constructor(...args) { 
        super();
        this.counter++; 
      }
    }
    assert.equal(new B(42, 2).counter, 45);
  });
  it('it is important where you place your `super()` call!', () => {
    class A {inc() { this.countUp = 1; }}
    class B extends A {
      inc() {
        
        this.countUp = 2
        super.inc() /// placed super after method to have it reach out to Class A
        return this.countUp;
      }
    }
    assert.equal(new B().inc(), 1);
  });
  it('use `super.constructor` to find out if there is a parent constructor', () => {
    class ParentClassA {constructor() {"parent"}}
    class B extends ParentClassA {
      constructor() {
        super();
        this.isTop = '' + super.constructor; /// fixed the spelling of constructor from konstructer to constructor
      }
    }
    assert(new B().isTop.includes('ParentClassA'), new B().isTop);
  });
});


/// BROKEN CODE BELOW
// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class`s constructor `super()` can be used', () => {
  it('`extend` a class and use `super()` to call the parent constructor', () => {
    class A {constructor() { this.levels = 1; }}
    class B {
      constructor() {
        
        this.levels++;
      }
    }
    assert.equal(new B().levels, 2);
  });
  it('`super()` may also take params', () => {
    class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
    class B extends A {
      constructor(...args) { 
        super();
        this.counter++; 
      }
    }
    assert.equal(new B(42, 2).counter, 45);
  });
  it('it is important where you place your `super()` call!', () => {
    class A {inc() { this.countUp = 1; }}
    class B extends A {
      inc() {
        super.inc();
        this.countUp = 2;
        
        return this.countUp;
      }
    }
    assert.equal(new B().inc(), 1);
  });
  it('use `super.constructor` to find out if there is a parent constructor', () => {
    class ParentClassA {constructor() {"parent"}}
    class B extends ParentClassA {
      constructor() {
        super();
        this.isTop = '' + super.konstructer;
      }
    }
    assert(new B().isTop.includes('ParentClassA'), new B().isTop);
  });
});
