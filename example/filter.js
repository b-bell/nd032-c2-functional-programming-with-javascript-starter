const values = ['true', true, 'yes', 'no', 1, 0, 'false', false];

const result = values.filter(v => v == true);

console.log(result);
// Expected output: Array [true, 1]