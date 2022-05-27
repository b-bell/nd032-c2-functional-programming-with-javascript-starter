const date = new Date();
const day = date.getDay();
const random = Math.floor(Math.random() * 10);

console.log(`Hello there! It's ${day}, and your random number for the day is ${random}. Smile and have a great day!`);