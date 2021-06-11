// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
function greet() {
    const time = new Date().getHours();

    if (time > 12 && time < 17) {
        return 'good afternoon';
    } else {
        return 'good morning';
    }
}

console.log(greet());
// Expected output:
// If from noon to 5pm, 'good afternoon'
// Othersiwe, 'good morning'

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------

function countDown(number) {
    const length = number + 1;
    return [...Array(length).keys()].reverse();
}

console.log(countDown(5));
// Expected output: [5, 4, 3, 2, 1, 0]