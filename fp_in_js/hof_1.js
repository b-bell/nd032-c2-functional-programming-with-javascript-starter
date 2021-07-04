// 1. Create a function that when passed as a callback
// to the Higher Order function provided, makes the final
// return the number's square plus two

const square = (x) => {
  return x * x;
}

const addTwo = (callback, x) => {
  return callback(x) + 2
}

console.log(addTwo(square, 3));
// Expected output: 11

// 2. Create a Higher Order Function that could take this
// callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const greeting = (callback, f, l, t) => {
  return 'Hello ' + callback(f, l, t);
}

console.log(greeting(createFullName, 'Brian', 'Bell', 'Dev'));

// you might notice that this function is less than ideal -
// that's great! We'll talk about why next