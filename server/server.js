const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios');
// activates dotenv to look at .env file
require('dotenv').config();

// Route includes
const locationRouter = require('./routes/location.router');
// holds current location after fetching it from Google
let currentLocation;
let firstAddressArray = [];
let secondAddressArray = [];


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));


/** ---------- EXPRESS ROUTES ---------- **/
// proxy api
app.get('/api/location', (req, res) => {
    console.log('Got to GET location');
    res.send(currentLocation);

})

//find location using Google geolocation API
app.post('/api/location', (req, res) => {
    const queryText = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.MAPS_API_KEY}`;
    console.log('Inside POST to GOOGLE MAPS');
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

// GET request to Google's geocaching API to convert given addresses to latitude and longitude
app.get('/api/addresses', (req, res) => {
    console.log('Got to geocaching GET', req.query);
    const query = req.query;

    
    const queryText = `https://maps.googleapis.com/maps/api/geocode/json?address=${query.firstNumber}+${query.firstStreet}+${query.firstStreetType},
    +${query.firstCity},+${query.firstState}&key=${process.env.MAPS_API_KEY}`;

    axios.get(queryText)
        // get first response, then send second request
        .then(response => {
            // console.log('Response for address', response.data);
            firstAddressArray.push(response.data);
            // send second address query
            const secondQueryText = `https://maps.googleapis.com/maps/api/geocode/json?address=${query.secondNumber}+${query.secondStreet}+${query.secondStreetType},
            +${query.secondCity},+${query.secondState}&key=${process.env.MAPS_API_KEY}`;

            console.log('sending second query', secondQueryText);
            
            axios.get(secondQueryText)
                .then(secondResponse => {
                    console.log(secondResponse.data);
                    
                    secondAddressArray.push(secondResponse.data)
                    console.log('second address array', secondAddressArray[0]);
                    
                })
                .catch(err => {
                    console.log('Problem with converting second location', err);
                });



            console.log('First addressArrays', firstAddressArray[0]);
            
        })
        // catch for first query
        .catch(err => {
            console.log('Problem with converting given location', err);
            res.sendStatus(500);
        })
})

app.get('/api/addresses/send', (req, res) => {
    console.log('Got to GET addresses');
    res.send({
        firstAddressObject: firstAddressArray[0],
        secondAddressObject: secondAddressArray[0]
    });

})
// get request to send response data back to client side 

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});