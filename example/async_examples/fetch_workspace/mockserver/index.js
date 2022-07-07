const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Parse requests of content-type - applicaiton/json
app.use(bodyParser.json());

// GET route
app.get('/', (req, res) => {
    res.json({'message': 'You successfully made a GET request!'});
});

// POST route
app.post('/', (req, res) => {
    res.json({'message': 'You successfully made a POST request!'});
});

// PUT route
app.put('/', (req, res) => {
    res.json({'message': 'You successfully made a PUT request!'});
});

// DELETE route
app.delete('/', (req, res) => {
    res.json({'message': 'You successfully made a DELETE request'});
});

// Long running request route
app.get('/longexample', (req, res) => {
    const response = () => {
        res.json({'message': 'This request took 2 seconds.'});
    }
    setTimeout(response, 2000);
});

// No page request route
app.get('/nopage', (req, res) => {
    res.statusCode(400);
});

// Listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});