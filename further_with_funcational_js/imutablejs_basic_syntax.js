// Getting and Setting valuse using Immutable module

// immutable objects are called 'maps'
const Immutable = require('immutable'); // import immutable module

// this is how we declare an immutable Object
const map1 = Immutable.Map({ a: 1, b: 2, c: 3 });

// Here is an important part. We can't update map1, so instead we have to make the change on map2.
const map2 = map1.set('b', 50);

// Because of this, the old state of map1 is still available
map1.get('b'); // 2
console.log(map1.get('b'));

// And map2 shows our update.
map2.get('b'); // 50
console.log(map2.get('b'));

// equaltiy check
map1.equals(map2); // false
console.log(map1.equals(map2));

// Use with ordinary objects
const state1 = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 });
const state2 = Immutable.Map({ c: 10, a: 20, t: 30 });
const obj = { d: 100, o: 200, g: 300 };
const map3 = state1.merge(state2, obj);
console.log(map3.toJS());