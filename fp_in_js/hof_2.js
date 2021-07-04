weaponsWithNoises = [
	{ name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek' },
	{ name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars' },
	{ name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who' },
	{ name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars' },
	{ name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black' }
]

function weaponsFromUniverse(universe) {
	// ...Your code here!
	return m => {
		const weapon = weaponsWithNoises.find(obj => {
			return obj.name === m;
		});

		if (weapon.universe === universe) {
			return `used ${weapon.name}: ${weapon.noise}`;
		} else {
			return `${weapon.name} is not a part of the ${universe} universe`;
		}
	}
}

// USAGE
const useStarWarsWeapon = weaponsFromUniverse('Star Wars');

console.log(useStarWarsWeapon('Blaster'));
// Expected output: 'used Blaster: Pew Pew'
console.log(useStarWarsWeapon('Noisy Cricket'));
// Expected output: 'Noisy Cricket is not a part of the Star Wars universe'