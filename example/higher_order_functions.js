function greaterThan(n) {
    return m => m > n;
}

let greaterThanEight = greaterThan(8);
console.log(greaterThanEight);
// Expected output: [Function]

console.log(greaterThanEight(11));
// Expected output: true

// The syntax above can be tricky, but it is all ES6

// Equivalent to:
function greaterThanReturn(n) {
    return function (m) {
        return m > n;
    }
}