// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`let` restricts the scope of the variable to the current block', () => {
  describe('`let` vs. `var`', () => {
    it('`var` works as usual, it`s scope is the function', () => {
      if (true) {
        let varX = true;
      }
      
    });
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        var letX = true;
      }
      () => console.log(letX);
    });
  });

  describe('`let` usage', () => {
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (var key in obj) {}
      () => console.log(key);
    });
    it('create artifical scope, using curly braces', () => {
      {
        var letX = true;
      }
      () => console.log(letX);
    });
  });
});

// Original code listed below
// // 7: block scope - let
// // To do: make all tests pass, leave the asserts unchanged!
// // Follow the hints of the failure messages!

// describe('`let` restricts the scope of the variable to the current block', () => {
//   describe('`let` vs. `var`', () => {
//     it('`var` works as usual, it`s scope is the function', () => {
//       if (true) {
//         let varX = true;
//       }
//       assert.equal(varX, true);
//     });
//     it('`let` restricts scope to inside the block', () => {
//       if (true) {
//         var letX = true;
//       }
//       assert.throws(() => console.log(letX));
//     });
//   });

//   describe('`let` usage', () => {
//     it('`let` use in `for` loops', () => {
//       let obj = {x: 1};
//       for (var key in obj) {}
//       assert.throws(() => console.log(key));
//     });
//     it('create artifical scope, using curly braces', () => {
//       {
//         var letX = true;
//       }
//       assert.throws(() => console.log(letX));
//     });
//   });
// });
