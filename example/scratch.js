let galaxy_ship = {
    torpedo_balance: 0,
    id: 123456,
}

function stock_arsenal(amount, id) {
    if (galaxy_ship.id === id) {
        // SIDE EFFECT
        // Galaxy_ship’s values are being updated, but it is not a part of the return of this function
        galaxy_ship.torpedo_balance += amount;

        console.log('arsenal successfully stocked');
        console.log(galaxy_ship.torpedo_balance);

        return 'arsenal successfully stocked';
    }

    console.log('invalid account id');
    return 'invalid account id';
}

stock_arsenal(40, 123456);
// expected output:
// arsenal successfully stocked
// 40