// Use Object.keys with the map method to print "This character has a(n) [property-name]"
// for each property

const character = {
    id: '12mn18udcbv9823',
    name: 'Chewbacca',
    race: 'Wookie',
    planet: 'Kashyyyk',
    job: 'First Mate'
};

console.log(Object.keys(character));

const description = Object.keys(character).map(x => {
    const phrase = `This character has a(n) ${x}.`
    console.log(phrase);
    return phrase;
});

console.log(description);
// Expected Output: 
// This character has a(n) id.
// This character has a(n) name.
// This character has a(n) race.
// This character has a(n) planet.
// This character has a(n) job.
// [ 'This character has a(n) id',  'This character has a(n) name',  'This character has a(n) race', 'This character has a(n) planet', 'This character has a(n) job' ]
