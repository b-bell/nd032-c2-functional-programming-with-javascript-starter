var nearEarthObjects = require('./nasa_near_earth_object_API.json');

// The object in the nasa_near_earth_object_API.json is a copy of real
// API response from the NASA Near-Earth Object API. 
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
const asteroidCount = nearEarthObjects["element_count"];

console.log(asteroidCount);
// Expected output: 25


// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set?
// Return the average absolute_magnitude_h.
const asteroids = Object.keys(nearEarthObjects['near_earth_objects']).map(key => {
    return nearEarthObjects.near_earth_objects[key];
}).flat();

const avgMagnitude = asteroids
    .map(a => a.absolute_magnitude_h)
    .reduce((total, current) => total + current) / asteroids.length;

console.log(avgMagnitude);
// Expected output: 23.677599999999998
// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool
// way to find averages. To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument. To learn more about it,
// take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous
const hazardousAsteroids = asteroids
    .filter(item => item['is_potentially_hazardous_asteroid'] === true)
    .map(item => {
        return {
            id: item['id'],
            name: item['name'],
            estimated_diameter_max: item['estimated_diameter']['miles']['estimated_diameter_max'],
            miss_distance_miles: item.close_approach_data[0]['miss_distance']['miles']
        }
    });

console.log(hazardousAsteroids);
// Expected output: [{id: '3797749',name: '(2018 BO1)',estimated_diameter_max: 0.2933532873,miss_distance_miles: '30311929.3487318204'},{id: '3740494',name: '(2016 AF193)',estimated_diameter_max: 0.1539539936,miss_distance_miles: '9930345.1795315036'},{id: '3720769',name: '(2015 KH157)',estimated_diameter_max: 0.3867149477,miss_distance_miles: '28535035.0373986152'},{id: '2152561',name: '152561 (1991 RB)',estimated_diameter_max: 0.5853167591,miss_distance_miles: '33938297.8182451278'},{id: '3441171',name: '(2008 XW2)',estimated_diameter_max: 0.2675413778,miss_distance_miles: '15280879.7275737374'}]

// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles
const nearMisses = asteroids
    .filter(item => item.close_approach_data[0].miss_distance.miles < 900000)
    .map(item => {
        return {
            "id": item.id,
            "name": item.name,
            "estimated_diameter_max": item.estimated_diameter.miles.estimated_diameter_max,
            "miss_distance_miles": item.close_approach_data[0].miss_distance.miles
        }
    });

console.log(nearMisses);
// Expected output: [{id: '3907553',name: '(2019 XH2)',estimated_diameter_max: 0.0061544743,miss_distance_miles: '775950.9423668918'},{id: '3893457',name: '(2019 WH2)',estimated_diameter_max: 0.0163226609,miss_distance_miles: '818598.4061734692'}]


// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 
const nearestAsteroidTime = asteroids
    .reduce((nearestAsteroid, currentAsteroid) => {
        const nearestAsteroidDistance = nearestAsteroid.close_approach_data[0].miss_distance.miles;
        const currentAsteroidDistance = currentAsteroid.close_approach_data[0].miss_distance.miles;
        return nearestAsteroidDistance < currentAsteroidDistance ? nearestAsteroid : currentAsteroid;
    }).close_approach_data[0].close_approach_date_full;

console.log(nearestAsteroidTime);
// Expected output: 2019-Dec-01 20:29
