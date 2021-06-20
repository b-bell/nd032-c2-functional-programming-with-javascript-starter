const bestBars = [
    'Mos Eisley Cantina',
    'Clark`s Bar',
    '10 Forward',
    'The Restaurant at the End of the Universe',
    'The Prancing Pony',
    '10 Forward'
];

const test1 = bestBars.find(x => x === 'Quark`s Bar');
const test2 = bestBars.find(x => x === '10 Forward');

console.log(test1); // Expected output: undefiend
console.log(test2); // Expected output: 10 Forward
