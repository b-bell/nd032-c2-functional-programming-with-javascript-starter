class Person {
    constructor(lastName, firstName) {
        this.name = firstName + ' ' + lastName;
    }

    determineSalutation(date) {
        const hour = (date && date.getHours()) || new Date().getHours();

        if (hour <= 6) {
            return 'Good Morning';
        } else if (hour >= 17) {
            return 'Good Evening';
        } else {
            return 'Hello';
        }
    }

    greet() {
        return `${this.determineSalutation()},\u00A0${this.name}`;
        // Using JavaScript template literal: `${}`
        // \u00A0 is a symbol to add a space in the template literal
    }
}

const kirk = new Person('Kirk', 'Captain');
console.log(kirk.greet());
//expected output: Hello, Captain Kirk