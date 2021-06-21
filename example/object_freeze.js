// ----------------------------------------------------------
// OBJECT FREEZE EXAMPLES
// ----------------------------------------------------------

const currentShow = {
    title: 'Dr. Who',
    seasons: 11,
    currentSeason: 4
};

// As a const, we can do this:
currentShow.currentSeason = 5;
console.log(currentShow);
// Expected output { title: 'Dr. Who', seasons: 11, currentSeasons: 5 }

// But if we freeze the object
Object.freeze(currentShow);

currentShow.currentSeason = 6;
// This would actually cause an error

console.log(currentShow);
// Expected output: {title: 'Dr. Who', seasons: 11, currentSeasons: 5 }
// Now that it is frozn we can not update the current season of the current show
