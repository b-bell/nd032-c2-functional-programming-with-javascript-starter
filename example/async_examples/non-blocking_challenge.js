// Task 1 - write a program that acheives the following sequence

// log "A"
// wait 2s
// log "B"
// wait 3s
// log "C"
// log "D" immediately 

console.log('A');

setTimeout(() => {
    console.log('B');
    setTimeout(() => {
        console.log('C');
        console.log('D');
    }, 3000);
}, 2000);