const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios');
// activates dotenv to look at .env file
require('dotenv').config();

// holds current location after fetching it from Google
let currentLocation;


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// proxy api
app.get('/location', (req, res) => {
    axios.get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.MAPS_API_KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
})

//find location using Google geolocation API
app.post('/api/location', (req, res) => {
    const queryText = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.MAPS_API_KEY}`;

    axios.post(queryText)
        .then(response => {
            currentLocation = response.data;
            console.log(currentLocation);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Problem with finding current location', err);
            res.sendStatus(500);
        })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});