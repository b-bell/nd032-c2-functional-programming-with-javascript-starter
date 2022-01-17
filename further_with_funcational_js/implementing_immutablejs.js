const { List } = require("immutable");

// Nest 1
const currentShow = Immutable.Map({
    title: 'Dr. Who',
    seasons: 11,
    currentSeason: 4,
    characters: {
        main: 'The Doctor',
        supporting: ['Dalek1']
    }
});

// Nest 2
const currentShow = Immutable.Map({
    title: 'Dr. Who',
    seasons: 11,
    currentSeason: 4,
    characters: Immutable.Map({
        main: 'The Doctor',
        supporting: List(['Dalek1'])
    })
});