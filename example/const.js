const currentBook = 'The Time Machine';

const bookDetails = {
    title: 'The Time Machine',
    author: 'H. G. Wells',
    totalPages: 84,
    currentPage: 42
};

const library = [
    'Dune',
    'Nineteen Eighty-Four',
    'Ender`s Game',
    'Hyperion',
    'Fahrenheit 451'
];

currentBook = 'Stranger in a Strange Land';
// Results in error, can't edit const value

bookDetails = {
    title: 'I, Robot',
    author: 'Isaac Asimov',
    totalPages: 253,
    currentPage: 21
};
// Results in error, bookDetails is read-only

bookDetails.currentPage = 75;
// This works! We can update values within a const object

library = ['Dune', 'Nineteen Eighty-Four'];
// Results in error, can't redeclare library

library.concat('The Hitchiker`s Guide to the Galaxy');
// This works! We can update items in the array or add to it
// Note that concat is the best non-mutative way to add items to an array
