// Callback Challenge 2: Secret Number

// Write a callback chain that does the following:

// 1. Generate a random number
// 2. Waits three seconds, then adds five to the random number
// 3. Every two seconds, adds two to the random number for a total of 6 seconds
// 4. Subtracts three
// 5. Waits four seconds, and logs the resulting number


// Your Code Here:
const subtractThree = (n) => {
    n = n - 3;
    setTimeout(() => {
        console.log(n);
    }, 4000);
}

const everyTwoSecs = (n) => {
    let index = 0;
    const addTwo = (cb) => {
        n = n + 2;
        if (index == 2) {
            clearInterval(Id);
            cb(n);
        } else {
            index++;
        }
    }
    const Id = setInterval(addTwo, 2000, subtractThree);
}

const waitThreeAddFive = (n, cb) => {
    setTimeout(() => {
        n = n + 5;
        cb(n);
    }, 3000);
}

// Function for you to get started with:
const generateRandomNumber = (cb) => {
    const rand = Math.round(Math.random() * 10);
    cb(rand, everyTwoSecs);
}

generateRandomNumber(waitThreeAddFive);

// HINT: Add in console logs!

// HINT: setInterval can be stopped using clearInterval like this:
// const myInterval = setInterval(exampleFunc, 2000)
// clearInterval(myInterval)