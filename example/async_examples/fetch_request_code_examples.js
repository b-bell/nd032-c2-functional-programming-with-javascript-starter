fetch('https://url-with-desired-data')
.then(response => response.json())
.then(error => console.log(error));

fetch('https://url-with-desired-data', {
    method: 'POST', // Options: GET (default), POST, PUT, PATCH, DELETE
    mode: 'cors', // Options: cors (default), no-cors, same-origin
    headers: {
        'Content-Type': 'applicaiton/json'
    },
    body: {'data': 'This is json'} // Body data type must match Content-Type header
})
.then(response => response.json())
.then(error => console.log(error));