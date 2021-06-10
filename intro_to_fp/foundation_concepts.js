/*
// Directions: Translate from normal function to pure function
let greeting = 'Hello, '

const greet = (name) => {
    return greeting += name
}
*/

/*
// My translation
const greet = (name) => {
    return `Hello, ${name}`;
}

// This code looks fine at first, but what if we needed to use this greet function again? 
// The greet function has unexpected results if used more than once because the greeting 
// variable is changed (mutated) to contain the name it is run with.

// Here is the problem:
console.log(greet('Arthur.'))
console.log(greet('Guinevere.'))
// Output: 
//  Hello, Arthur. 
//  Hello, Arthur. Guinevere. 

// But that isn't what we want! There are many many ways you can fix this 
// function to make it pure. When it is pure it will also be resuable.

// Desired output:
//  Hello, Arthur. 
//  Hello, Guinevere.
*/

// Code provided
const greet = (name, base_greeting) => {
    return `${base_greeting} ${name}`
}

let greeting = 'Hello, '

greet('Arthur.', greeting)
// now we can reuse greeting, and the greet function is pure

console.log(greet('Arthur.', greeting)) 
// expected output: 
//  Hello, Arthur. 
//  Hello, Arthur.
