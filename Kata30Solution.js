// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.of` creates an array with the given arguments as elements', () => {
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array.of(10); /// added .of after array to place '10' into an array
    assert.deepEqual(arr, [10]);
  });
  it('puts all arguments into array elements', () => {
    const arr = Array.of(1,2); /// add1 & 2 to paranthesis to make an array that contains those two #s
    assert.deepEqual(arr, [1, 2]);
  });
  it('takes any kind and number of arguments', () => {
    const starter = [1, 2];
    const end = [3, '4'];
    const arr = Array.of(starter, ...end); /// removed spread from starter to keep it in an array to match the assertion
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
});

//// BROKEN CODE BELOW

// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.of` creates an array with the given arguments as elements', () => {
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array.of(10); /// added .of after array to place '10' into an array
    assert.deepEqual(arr, [10]);
  });
  it('puts all arguments into array elements', () => {
    const arr = Array.of(1,2); /// add1 & 2 to paranthesis to make an array that contains those two #s
    assert.deepEqual(arr, [1, 2]);
  });
  it('takes any kind and number of arguments', () => {
    const starter = [1, 2];
    const end = [3, '4'];
    const arr = Array.of(starter, ...end); /// removed spread from starter to keep it in an array to match the assertion
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
});
