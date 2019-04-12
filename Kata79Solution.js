// 79: Promise - catch
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!
// Here we use promises to trigger, don't modify the block with the 
// returning promise!

describe('`catch()` returns a Promise and deals with rejected cases only', () => {
  describe('prerequisites for understanding', () => {
    it('*return* a fulfilled promise, to pass a test', () => {
     return Promise.resolve(); /// returned the Promise.resolve()
      assert(false); // Don't touch! Make the test pass in the line above!
    });
    it('reminder: the test passes when a fulfilled promise is returned', () => {
      return Promise.resolve('I should fulfill.'); /// changed reject to resolve
    });
  });
  describe('`catch` method basics', () => {
    it('is an instance method', () => {
      const p = Promise.resolve(); /// resolved the Promise to that p.catch was referencing a resolved Promise, which is a completed function because .catch does not work with resolved promises but it is a function
      assert.equal(typeof p.catch, 'function');
    });
    it('catches only promise rejections', (done) => {
      const promise = Promise.reject(); /// rejected the promise so that the .catch will initiate later in the sequence
      promise
        .then(() => { done('Should not be called!'); })
        .catch(done);
    });
    it('returns a new promise', () => {
      const whatToReturn = () => Promise.resolve(); /// changed reject to resolve, so that the promise is passed  to the const 'promise', which is then rejected so promise.catch is the new promise
      const promise =  Promise.reject();
      return promise.catch(() =>
        whatToReturn()
      );
    });
    it('converts it`s return value into a promise', () => {
      const p = Promise.reject();
      const p1 = p.catch(() => 'promise?'); /// set p.catch to return the string 'promise?' because the const p is a rejected promise, so p1 is a promise that returns the desired string value from the assertion statement
      return p1.then(result => assert.equal('promise?', result));
    });
    it('the first parameter is the rejection reason', () => {
      const p = Promise.reject('oops'); /// changed the parameter to oops, as the rejection reason is the first parameter
      return p.catch(reason => {
        assert.equal(reason, 'oops');
      });
    });
  });
  describe('multiple `catch`es', () => {
    it('only the first `catch` is called', () => {
      const p = Promise.reject('1');
      const p1 = p
          .catch(reason => '1 AND 2') /// changed the reason/parameter to '1 AND 2'
          .catch(reason => `${reason} AND 3`)
        ;
      return p1.then(result =>
        assert.equal(result, '1 AND 2')
      );
    });
    it('if a `catch` throws, the next `catch` catches it', () => {
      const p = Promise.reject('1');
      const p1 = p
      .catch(reason => { throw Error(`${reason} AND 2`) })
          .catch(err => { throw Error(`${err.message} AND 3`) })
          .catch(err => err.message) /// changed .catch(err => `${err} but NOT THIS`) to .catch(err => err.message)
        ;
      return p1.then(result =>
        assert.equal(result, '1 AND 2 AND 3')
      );
    });
  });
});
 /// BROKEN CODE BELOW ///
 // 79: Promise - catch
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!
// Here we use promises to trigger, don't modify the block with the 
// returning promise!

describe('`catch()` returns a Promise and deals with rejected cases only', () => {
  describe('prerequisites for understanding', () => {
    it('*return* a fulfilled promise, to pass a test', () => {
      Promise.resolve();
      assert(false); // Don't touch! Make the test pass in the line above!
    });
    it('reminder: the test passes when a fulfilled promise is returned', () => {
      return Promise.reject('I should fulfill.');
    });
  });
  describe('`catch` method basics', () => {
    it('is an instance method', () => {
      const p = Promise;
      assert.equal(typeof p.catch, 'function');
    });
    it('catches only promise rejections', (done) => {
      const promise = Promise.resolve();
      promise
        .then(() => { done('Should not be called!'); })
        .catch(done);
    });
    it('returns a new promise', () => {
      const whatToReturn = () => Promise.reject();
      const promise = Promise.reject();
      return promise.catch(() =>
        whatToReturn()
      );
    });
    it('converts it`s return value into a promise', () => {
      const p = Promise.reject();
      const p1 = p.catch(() => void 0);
      return p1.then(result => assert.equal('promise?', result));
    });
    it('the first parameter is the rejection reason', () => {
      const p = Promise.reject('rejection');
      return p.catch(reason => {
        assert.equal(reason, 'oops');
      });
    });
  });
  describe('multiple `catch`es', () => {
    it('only the first `catch` is called', () => {
      const p = Promise.reject('1');
      const p1 = p
          .catch(reason => void 0)
          .catch(reason => `${reason} AND 3`)
        ;
      return p1.then(result =>
        assert.equal(result, '1 AND 2')
      );
    });
    it('if a `catch` throws, the next `catch` catches it', () => {
      const p = Promise.reject('1');
      const p1 = p
          .catch(reason => { throw Error(`${reason} AND 2`) })
          .catch(err => { throw Error(`${err.message} AND 3`) })
          .catch(err => `${err} but NOT THIS`)
        ;
      return p1.then(result =>
        assert.equal(result, '1 AND 2 AND 3')
      );
    });
  });
});
