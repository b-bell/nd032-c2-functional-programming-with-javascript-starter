const arr = [1, 2, [3, 4, [5, 6]]];
const nestedArr = arr.flat();

console.log(nestedArr);
// Expected output: [1, 2, 3, 4, [5, 6]]

const moreNested = arr.flat(2);

console.log(moreNested);
// Expected output: [1, 2, 3, 4, 5, 6]