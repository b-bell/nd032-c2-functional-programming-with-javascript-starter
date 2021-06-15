const captains = ['Picard', 'Adama', 'Reynolds', 'Beeblebrox'];

// Create new array
const titles = captains.map(cap => `Captain ${cap}`);
/*
// Equivalent to
const titles = captains.map(cap => {
    return `Captain ${cap}`;
});
*/
console.log('Resulting Array: ', titles);
// Expected output: Resulting Array: ['Captain Picard', 'Captain Adama', 'Captain Reynolds', 'Captain Beeblebrox']
console.log('Original Array: ', captains);
// Is unchanged, expected output: Original Array: ['Picard', 'Adama', 'Reynolds', 'Beeblebrox']