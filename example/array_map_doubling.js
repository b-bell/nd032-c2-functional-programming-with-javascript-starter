const nums = [1, 2, 3, 4, 5];

// Internal callback
// ----------------------------------------------------------------------
const doubles = nums.map(x => x * 2);

console.log(doubles);
// Expected output: Array [2, 4, 6, 8, 10]

// External callback
// ----------------------------------------------------------------------
const doubler = function(x) {
    return x * 2;
};

const doubles2 = nums.map(x => {
    return doubler;
});

console.log(doubles2);
// Expected output: Array [2, 4, 6, 8, 10]