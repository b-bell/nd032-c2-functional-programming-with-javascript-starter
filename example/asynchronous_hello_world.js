// Welcome to a basic asynchronous program!
// This is a quick peek ahead into some of the syntax we'll be going over in the next lesson


// Notice how the console log for "Hello" comes AFTER "World",yet when the program runs, the words appear in the correct order!
const printHelloWorld = () => {

	setTimeout(console.log, 2000, "World");

	console.log("Hello ");
};

printHelloWorld();

// CHALLENGE - Move the setTimeout after the console log, does that change the outcome?

const printHelloWorld2 = () => {
	console.log("Hello ");
	setTimeout(() => {
		console.log("World")
	}, 2000);
};

printHelloWorld2();

// CHALLENGE - Edit the time elapsed between "Hello" and "World" appearing on the screen

const printHelloWorld3 = () => {
	console.log("Hello ");
	setTimeout(() => {
		console.log("World");
	}, 5000);
};

printHelloWorld3();

// CHALLENGE - Edit the message being sent to have three parts:
// Part 1: "I'm " - shows up immediately
// Part 2: "async" - shows up 2 seconds after "I'm"
// Part 3: "...ronous!" - shows up 4 seconds after "async"

const printHelloWorld4 = () => {
	console.log("I'm ");
	setTimeout(() => {
		console.log("async");
	}, 2000);
	setTimeout(() => {
		console.log("...hronous!");
	}, 6000);
};

printHelloWorld4();

// Extra Challenge - if you want to go even further with it, time each of the dots in the ellipses of part 3
// Write a function to make each dot appear one second after the other.

const printHelloWorld5 = () => {
	console.log("I'm ");
	setTimeout(() => {
		console.log("async");
	}, 2000);
	let i = 0;
	while(i<3) {
		setTimeout(() => {
			console.log(".");
		}, (i+1) * 1000);
		i++;
	}
	setTimeout(() => {
		console.log("hronous!");
	}, 6000);
};

printHelloWorld5();