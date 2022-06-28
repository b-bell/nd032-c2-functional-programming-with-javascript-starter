setTimeout((firstMessage, int) => {
    console.log(firstMessage, int);

    setTimeout((secondMessage, int2) => {
        let sum = int + int2;
        console.log(secondMessage, sum);

        setTimeout((thirdMessage, int3) => {
            sum = sum + int3;
            console.log(thirdMessage, sum);

        }, 3000, 'THIRD', 3);
    }, 2000, 'SECOND', 2);
}, 1000, 'FIRST', 1);