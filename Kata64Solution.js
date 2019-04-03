// 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`set.delete()` deletes an element from a set', function(){
  let set;
  beforeEach(() => set = new Set());
  describe('use `delete(<value>)` to delete an element', function() {
    beforeEach(function() {
      set.add('one').add('two').add('three');
    });
    it('`delete()` returns `true` when the element was found', function() {
      const returns = set.delete('one'); /// deleted one of the elements from the above set.add() method
      assert.strictEqual(returns, true);
    });
    it('and the size decreases', function() {
      set.delete('three'); /// deleted the third value from the above set.add methods to set the size to two
      assert.equal(set.size, 2);
    });
  });
  describe('if nothing was deleted (no element with the given value was found)', function() {
    it('returns `false`', function() {
      set.add('four'); /// added a different element than the one that set.delete() was going to delete
      const returns = set.delete('one');
      assert.equal(returns, false);
    });
  });
  describe('`undefined` is a valid value in a set', function() {
    it('deleting it, when it is not in the set, returns `false` too', function() {
   const whatToDelete = undefined /// set whatToDelete as undefined and not included in the set
      assert.equal(set.delete(whatToDelete), false);
    });
    it('`delete()` removes it, when its in the set', function() {
      set.add(); /// added an undefined object, so that when it is deleted, it asserts as true
      assert.equal(set.delete(), true);
    });
  });
  describe('the value does NOT get casted', function() {
    it('number 1 is different to string "1"', function() {
      set.add(1);
      set.add('2'); /// changed the string so that when the method set.delete('1') is called below, it returns as false
      assert.equal(set.delete('1'), false);
    });
  });
});

/// BROKEN CODE BELOW ///
