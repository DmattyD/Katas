// 35: Symbol.for - retrieves or creates a runtime-wide symbol
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Symbol.for` for registering Symbols globally', function() {
  it('creates a new symbol (check via `typeof`)', function() {
    const symbolType = typeof Symbol.for('symbol'); /// added typeof and set Symbol.for() = 'symbol'
    assert.equal(symbolType, 'symbol');
  });
  it('stores the symbol in a runtime-wide registry and retrieves it from there', function() {
    const sym =  Symbol.for('new symbol');
    const sym1 =  Symbol.for('new symbol'); /// changed the string to be 'new symbol'
    assert.equal(sym, sym1);
  });
  it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
    var globalSymbol = Symbol.for('new symbol');
    var localSymbol = Symbol('new symbol'); /// removed the .for after symbol
    assert.notEqual(globalSymbol, localSymbol);
  });
  describe('`.toString()` on a Symbol', function() {
    it('also contains the key given to `Symbol.for()`', function() {
      const description = Symbol('new symbol').toString(); /// added new symbol to the string of function Symbol()
      assert.equal(description, 'Symbol(new symbol)');
    });
    describe('NOTE: the description of two different symbols', function() {
      it('might be the same', function() {
        const symbol1AsString = Symbol('new symbol 1').toString();
        const symbol2AsString = Symbol.for('new symbol 1').toString(); /// set the string to 'new symbol 1'
        assert.equal(symbol1AsString, symbol2AsString);
      });
      it('but the symbols are not the same!', function() {
        const symbol1 = Symbol('new symbol'); /// removed the .for from after symbol
        const symbol2 = Symbol('new symbol');/// removed the .for from after symbol
        assert.notEqual(symbol1, symbol2);
      });
    });    
  });
});

/// BROKEN CODE BELOW

// 35: Symbol.for - retrieves or creates a runtime-wide symbol
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Symbol.for` for registering Symbols globally', function() {
  it('creates a new symbol (check via `typeof`)', function() {
    const symbolType = Symbol.for('symbol name');
    assert.equal(symbolType, 'symbol');
  });
  it('stores the symbol in a runtime-wide registry and retrieves it from there', function() {
    const sym = Symbol.for('new symbol');
    const sym1 = Symbol.for('new symbol1');
    assert.equal(sym, sym1);
  });
  it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
    var globalSymbol = Symbol.for('new symbol');
    var localSymbol = Symbol.for('new symbol');
    assert.notEqual(globalSymbol, localSymbol);
  });
  describe('`.toString()` on a Symbol', function() {
    it('also contains the key given to `Symbol.for()`', function() {
      const description = Symbol('').toString();
      assert.equal(description, 'Symbol(new symbol)');
    });
    describe('NOTE: the description of two different symbols', function() {
      it('might be the same', function() {
        const symbol1AsString = Symbol('new symbol 1').toString();
        const symbol2AsString = Symbol.for('new symbol').toString();
        assert.equal(symbol1AsString, symbol2AsString);
      });
      it('but the symbols are not the same!', function() {
        const symbol1 = Symbol.for('new symbol');
        const symbol2 = Symbol.for('new symbol');
        assert.notEqual(symbol1, symbol2);
      });
    });    
  });
});
