let name = 'Captain Kirk';
let hour = new Date().getHours();

let greeting = '';

if (hour <= 6) {
    greeting = 'Good Morning, ';
} else if (hour >= 17) {
    greeting = 'Good Evening, ';
} else {
    greeting = 'Hello, ';
}

greeting += name + '.'

console.log(greeting);
//expected output: Hello, Captain Kirk
