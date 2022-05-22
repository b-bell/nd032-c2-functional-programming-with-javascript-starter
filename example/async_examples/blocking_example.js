// Example of blocking code from the video

// This function takes a long time!
const logFunction = (ms) => {
    let start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
};

console.log('One');

logFunction(3000);

console.log('Two');