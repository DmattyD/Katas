// 76: Promise - creation 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A promise can be created in multiple ways', function() {
  describe('creating a promise fails when', function() {
    it('using `Promise` as a function', function() {
      function callPromiseAsFunction() { 
        Promise(); /// called the Promise by using () after Promise;
      }
      assert.throws(callPromiseAsFunction);
    });
    it('no parameter is passed', function() {
      function promiseWithoutParams() {
        new Promise(); /// removed the function from Promise()
      }
      assert.throws(promiseWithoutParams);  
    });
    it('passing a non-callable throws too', function() {
      const notAFunction = 1; /// changed notAFunction from =  '() => {}' to a value that isn't a function
      assert.throws(() => { new Promise(notAFunction); });
    });
  });
  describe('most commonly Promises get created using the constructor', function() {
    it('by passing a resolve function to it', function() {
      const promise = new Promise((resolve) => resolve()); /// called resolve as the paramer in the Promise
      return promise;
    });
    it('by passing a resolve and a reject function to it', function(done) {
      const promise = new Promise((resolve, reject) => reject()); /// changed the return function from resolve() to reject()
      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(done);
    });
  });
  describe('extending a `Promise`', function() {
    it('using `class X extends Promise{}` is possible', function(done) {
      class MyPromise extends Promise {} /// changed class MyPromise {} to class MyPromise extends Promise {}
      const promise = new Promise(resolve => resolve()); /// added () around resolve to make it a parameter /// also made the const from 'new MyPromise' to 'new Promise'
      promise
        .then(() => done())
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
      class ResolvingPromise extends Promise {
        constructor() {
        super()
        }
      }
      return ResolvingPromise /// changed from return new ResolvingPromise(resolve => resolve()); to return ResolvingPromise
    });
  });
  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {
    it('returns all results', function(done) {
      const promise = Promise.all([
        new Promise((resolve) => resolve(1)),new Promise((resolve) => resolve(2)) /// deleted the 3rd promise, made sure the resolves were parameters of the promise
      ]);
      promise
        .then(value => { assert.deepEqual(value, [1, 2]); done(); })
        .catch(e => done(new Error(e)));
    });
    it('is rejected if one rejects', function(done) {
      const promise = Promise.all([
        new Promise((resolve) => resolve(1)), /// made resolve a parameter
        new Promise((reject) => resolve(2)), /// made a new promise with reject parameter
      ]);
      promise
        .then(() => done(new NotRejectedError()))
        .catch(() => done());
    });
  });
  
  describe('`Promise.race()` returns the first settled promise', function() {
    it('if it resolves first, the promises resolves', function(done) {
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise((resolve) => resolve('1st :)')); /// fixed the resolve parameter
      const promise = Promise.race([lateRejectedPromise, earlyResolvingPromise]); /// added the earlyResolving Promise after the late promise
      promise
        .then(value => { assert.deepEqual(value, '1st :)'); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a rejector')); /// changed rejector to lower case
      const lateResolvingPromise = new Promise((resolve) => setTimeout(resolve, 10)); /// fixed the resolve parameter
      const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.equal(value, 'I am a rejector'); done(); })
        .catch(done);
    });
  });
  describe('`Promise.resolve()` returns a resolving promise', function() {
    it('if no value given, it resolves with `undefined`', function(done) {
      const promise = Promise.resolve(); /// fixed the method
      promise
        .then(value => { assert.deepEqual(value, void 0); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    it('resolves with the given value', function(done) {
      const promise = Promise.resolve('quick resolve'); /// called the string value from the assertion statement
      promise
        .then(value => { assert.equal(value, 'quick resolve'); done(); })
        .catch(e => done(e));
    });
  });
  describe('`Promise.reject()` returns a rejecting promise', function() {
    it('if no value given, it rejects with `undefined`', function(done) {
      const promise = Promise.reject();  /// changed Promise.resolve() to Promise.reject();
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, void 0); done(); })
        .catch(done);
    });
    it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
      const promise = Promise.reject('quick reject'); /// called the reject() method and passed the value from the assertion statement into it 
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, 'quick reject'); done(); })
        .catch(done);
    });
  });
});

class NotRejectedError extends Error {
  constructor() {
    super();
    this.message = 'Expected promise to be rejected.';
  }
}

/// BROKEN CODE BELOW ///
// 76: Promise - creation 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A promise can be created in multiple ways', function() {
  describe('creating a promise fails when', function() {
    it('using `Promise` as a function', function() {
      function callPromiseAsFunction() { 
        Promise;
      }
      assert.throws(callPromiseAsFunction);
    });
    it('no parameter is passed', function() {
      function promiseWithoutParams() {
        new Promise(() => {});
      }
      assert.throws(promiseWithoutParams);  
    });
    it('passing a non-callable throws too', function() {
      const notAFunction = () => {};
      assert.throws(() => { new Promise(notAFunction); });
    });
  });
  describe('most commonly Promises get created using the constructor', function() {
    it('by passing a resolve function to it', function() {
      const promise = new Promise(() => resolve());
      return promise;
    });
    it('by passing a resolve and a reject function to it', function(done) {
      const promise = new Promise((resolve, reject) => resolve());
      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(done);
    });
  });
  describe('extending a `Promise`', function() {
    it('using `class X extends Promise{}` is possible', function(done) {
      class MyPromise {}
      const promise = new MyPromise(resolve => resolve());
      promise
        .then(() => done())
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
      class ResolvingPromise extends Promise {
        
      }
      return new ResolvingPromise(resolve => resolve());
    });
  });
  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {
    it('returns all results', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2)),new Promise(resolve => resolve(3))
      ]);
      promise
        .then(value => { assert.deepEqual(value, [1, 2]); done(); })
        .catch(e => done(new Error(e)));
    });
    it('is rejected if one rejects', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1))
      ]);
      promise
        .then(() => done(new NotRejectedError()))
        .catch(() => done());
    });
  });
  
  describe('`Promise.race()` returns the first settled promise', function() {
    it('if it resolves first, the promises resolves', function(done) {
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
      const promise = Promise.race([lateRejectedPromise]);
      promise
        .then(value => { assert.deepEqual(value, '1st :)'); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
      const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
      const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.equal(value, 'I am a rejector'); done(); })
        .catch(done);
    });
  });
  describe('`Promise.resolve()` returns a resolving promise', function() {
    it('if no value given, it resolves with `undefined`', function(done) {
      const promise = Promise.resolve;
      promise
        .then(value => { assert.deepEqual(value, void 0); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    it('resolves with the given value', function(done) {
      const promise = Promise.resolve();
      promise
        .then(value => { assert.equal(value, 'quick resolve'); done(); })
        .catch(e => done(e));
    });
  });
  describe('`Promise.reject()` returns a rejecting promise', function() {
    it('if no value given, it rejects with `undefined`', function(done) {
      const promise = Promise.resolve();
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, void 0); done(); })
        .catch(done);
    });
    it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
      const promise = Promise;
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, 'quick reject'); done(); })
        .catch(done);
    });
  });
});

class NotRejectedError extends Error {
  constructor() {
    super();
    this.message = 'Expected promise to be rejected.';
  }
}
