/*
new Promise((resolve, reject) => {
    console.log('A');
    resolve();
    //reject();
})
.then(() => {
    console.log('B');
})
.then(() => {
    console.log('C');
})
.then(() => {
    console.log('D');
})
.catch(() => {
    console.log('ERROR');
})*/

// Promise chaining with data
new Promise((resolve, reject) => {
    console.log('A');
    resolve(['B', 'C', 'D']);
})
.then((data) => {
    console.log(data.shift());
    return data;
})
.then((data) => {
    throw new Error(`Error at ${data.shift()}`)
    console.log(data.shift());
    return data;
})
.then((data) => {
    console.log(data.shift());
    return data;
})
.catch((error) => {
    console.log(error);
})