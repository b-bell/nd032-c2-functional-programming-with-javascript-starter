const runTimer = (startingTime) => {
	let time = parseInt(startingTime);
	while (time < 100) {
		console.log('testing', time);
		time++;
	}
};

runTimer(0);
console.log('timer complete');