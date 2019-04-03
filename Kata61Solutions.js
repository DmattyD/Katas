// 61: modules - import 
// To do: make all tests pass, leave the assert lines unchanged!

import assert from 'assert'; // is only here for completeness, `assert` is always imported by default
import {equal} from 'assert'; /// for test 3 - imported equal from assert
import { deepEqual, notEqual } from 'assert'; /// for test 3 and for, imported deepEqual(3) and notEqual(4)
import { equal as myEqual , default as myAssert} from 'assert'; /// import equal from assert and assigned it the value of myEqual for test 5.
/// for test 6, assigned the default value as myAssert per the instructions.

describe('use `import` to import functions that have been exported (somewhere else)', function() {
  describe('the import statement', function() {
    it('is only allowed on the root level', function() {
      // Try to comment this out, it will yell at you!
      // import assert from 'assert';
    });
    it('import an entire module using `import <name> from "<moduleName>"`', function() {
      const expectedType = 'function'; /// the expectedTyped of import is a function
      assert.equal(typeof assert, expectedType);
    });
  });
  describe('import members', function() {
    it('import a single member, using `import {<memberName>} from "module"`', function() {
      assert.strictEqual(equal, assert.equal);
    });
    describe('separate multiple members with a comma', function() {
      it('`deepEqual` from the assert module', () => {
        assert.strictEqual(deepEqual, assert.deepEqual);
      });
      it('`notEqual` from the assert module', () => {
        assert.strictEqual(notEqual, assert.notEqual);
      });
    });
  });
  describe('alias imports', function() {
    it('using `member as alias` as memberName', function() {
      assert.strictEqual(myEqual, assert.equal);
    });
    it('rename the default export of a module, using `default as alias` as memberName', function() {
      assert.strictEqual(myAssert, assert);
    });
  });
});

/// BROKEN CODE BELOW ///
// 61: modules - import 
// To do: make all tests pass, leave the assert lines unchanged!

import assert from 'assert'; // is only here for completeness, `assert` is always imported by default


describe('use `import` to import functions that have been exported (somewhere else)', function() {
  describe('the import statement', function() {
    it('is only allowed on the root level', function() {
      // Try to comment this out, it will yell at you!
      // import assert from 'assert';
    });
    it('import an entire module using `import <name> from "<moduleName>"`', function() {
      const expectedType = '???';
      assert.equal(typeof assert, expectedType);
    });
  });
  describe('import members', function() {
    it('import a single member, using `import {<memberName>} from "module"`', function() {
      assert.strictEqual(equal, assert.equal);
    });
    describe('separate multiple members with a comma', function() {
      it('`deepEqual` from the assert module', () => {
        assert.strictEqual(deepEqual, assert.deepEqual);
      });
      it('`notEqual` from the assert module', () => {
        assert.strictEqual(notEqual, assert.notEqual);
      });
    });
  });
  describe('alias imports', function() {
    it('using `member as alias` as memberName', function() {
      assert.strictEqual(myEqual, assert.equal);
    });
    it('rename the default export of a module, using `default as alias` as memberName', function() {
      assert.strictEqual(myAssert, assert);
    });
  });
});
