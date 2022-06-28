// Challenge 1: Broken callback chain

// There are three problems with this code, fix them to get the console.log message:
// "Well done! { points: [ 49538, 1314 ], type: '3K8B' }"


// Hint: Order of function calls should go getData -> handleResponse -> parseResponse -> useValues

const dataJson = {
    response: {
        timeElapsed: 45938,
        distanceTotal: 1314,
        variant: '3K8B',
    }
}

const useValues = (parsedData) => {
    // Pretend we're using these
    console.log('Well done!', parsedData);
}

// cb is a common naming choice for a callback argument
const parseResponse = (data, cb) => {
    const {response} = data;
    const parsed = {
        points: [response.timeElapsed, response.distanceTotal],
        type: response.variant,
    }
    cb(parsed);
}

const handleResponse = (json) => {
    let data = JSON.parse(json);
    parseResponse(data, useValues);
}

const getData = () => {
    // Mock API call
    setTimeout(handleResponse, 1000, JSON.stringify(dataJson));
}

getData();