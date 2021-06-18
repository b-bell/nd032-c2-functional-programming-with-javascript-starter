const sales = [120.00, 19.99, 3.50, 4.00];

const total = sales.reduce((runningTotal, currentValue) => {
    console.log(runningTotal, currentValue);
    return runningTotal + currentValue;
});

// Cycle 1: 120, 19.99
// Cycle 2: 139.99 3.5
// Cycle 3: 143.49 4

// Expected output: 147.49

// If you can follow the code above - great job! No one masters
// the reduce method overnight, but being able to follow the code
// is the first step.  Below are two examples of alternate syntax
// that you might also see out in the wild.  Can you follow these?

// SAME AS:
const reducer = (runningTotal, currentValue) => runningTotal + currentValue;
console.log(sales.reduce(reducer));

// Look! You can even run map, filter, and reduce on array literals!
// SAME AS:
[120.00, 19.99, 3.50, 4.00].reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue;
});
