let state = {
    name: 'Wash',
    ship: {
        name: 'Serenity',
        class: 'Firefly'
    },
    role: 'Pilot',
    favoriteThing: {
        item: 'Toy',
        details: {
            type: 'Toy Tyrannosaurus Rex'
        }
    }
};

const newState = {
    name: 'Mal',
    role: 'Captain',
    favoriteThing: {
        item: 'Not complicated'
    },
    history: ['Browncoat sergeant']
};

state = Object.assign(state, newState);
// Object.assign(state, newState);

console.log(state);
// Expected output:
// { name: 'Mal',
// ship: {name: 'Serenity', class: 'Firefly' },
// role: 'Captain',
// favoriteThing: { item: 'Not Complicated' },
// history: [ 'Browncoat sergeant' ] }