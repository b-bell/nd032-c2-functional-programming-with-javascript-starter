const greet = (name) => (salutation) => `${salutation}, ${name}.`;

const determineSalutation = (callback) => {
    const hour = new Date().getHours();

    if (hour <= 6) {
        return callback('Good Morning');
    } else if (hour >= 17) {
        return callback('Good Evening');
    } else {
        return callback('Hello');
    }
}

let result = determineSalutation(greet('Captain Kirk'));
console.log(result);
//expected output: Hello, Captain Kirk