import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import './LocationTesting.css';

function LocationTesting() {
    // state for storing current location after finding it
    const [currentLocation, setCurrentLocation] = useState({});
    const [distance, setDistance] = useState([]);
    // states for storing address input data
    const [firstAddress, setFirstAddress] = useState({
        number: 0,
        street_name: '',
        street_type: '',
        city: '',
        state_code: ''
    });
    const [secondAddress, setSecondAddress] = useState({
        number: 0,
        street_name: '',
        street_type: '',
        city: '',
        state_code: ''
    });


    // useEffect(() => {
    //     getLocation();
    // }, []);

    // change handlers for the two address inputs
    const handleFirstAddressChange = (event, propertyName) => {
        setFirstAddress({
            ...firstAddress,
            [propertyName]: event.target.value
        })
    }

    const handleSecondAddressChange = (event, propertyName) => {
        setSecondAddress({
            ...secondAddress,
            [propertyName]: event.target.value
        })
    }


    // makes a request to retrieve and store user's current location using Google Maps APIs
    const getLocation = () => {
        // send current location data
        axios.post('/api/location')
            .then(response =>{
                // then GET location data from server
                axios.get('/api/location')
                .then(response =>{
                    console.log(response.data);
                    setCurrentLocation(response.data);
                })
                .catch(err => {
                    console.log('Problem with locations GET client-side', err);
                })
            })
            .catch(err => {
                console.log('Problem with locations POST client-side', err);
            })
    }

    // on click, packs up information from both address inputs and sends them to Google Maps route
    const sendAddressInfo = () => {
        // console.log('address objects', firstAddress, secondAddress); 


        // GET request
        axios.get(`/api/distance`, {
            params: {
                firstNumber: firstAddress.number,
                firstStreet: firstAddress.street_name,
                firstStreetType: firstAddress.street_type,
                firstCity: firstAddress.city,
                firstState: firstAddress.state_code,
                secondNumber: secondAddress.number,
                secondStreet: secondAddress.street_name,
                secondStreetType: secondAddress.street_type,
                secondCity: secondAddress.city,
                secondState: secondAddress.state_code,
            },
        })
            .then(response => {
                console.log('Got distance', response);
                // console.log('Got to nested GET request');
                // // then fetch server-stored address object data sent by Google
                // axios.get('/api/addresses/send')
                //     .then(secondResponse => {
                //         console.log('data in response', secondResponse.data);
                //     })
                //     .catch(err => {
                //         console.log('problem with nested GET for server data', err);
                //     })
                // console.log('response for addresses:', response.data);
                
            }) // end .then for Google API request
            // catch for first GET to Google API
            .catch(err => {
                console.log('Problem with addresses distance between GET', err);
            })
    }

    // click handler to GET data from server stored after Google API request
    const calculateDistance = () => {
        console.log('clicked');
        axios.get('/api/addresses/send')
        .then(response => {
            console.log('data in response', response.data);
            setDistance(response.data);
        })
        .catch(err => {
            console.log('problem with nested GET for server data', err);
        })
    }

    const distanceDisplay = () => {
        if (distance.length === 0) {
            return
        } else {
            return (
                <div className="distance-text">
                    <h3>Distance between addresses is: {distance[0].elements[0].distance.text}</h3>
                    <h3>And it will take you {distance[0].elements[0].duration.text} minutes to drive there.</h3>
                </div>
            )
        }
    }

    // console.log(distance[0].elements[0].distance.text);
    // console.log(distance[0].elements[0].duration.text);
    // console.log('local location state', currentLocation);
    // console.log('Current address object', firstAddress, secondAddress);
    return (
        <div className="App-location-testing">
            <Button 
                variant="contained"
                color="primary"
                onClick={getLocation}
            >
                Get Current Location
            </Button>
            <FormControl className="address-form">
                <TextField 
                    label="start address number"
                    onChange={(event) => handleFirstAddressChange(event, 'number')}
                >
                </TextField>
                <TextField 
                    label="street name"
                    onChange={(event) => handleFirstAddressChange(event, 'street_name')}
                >
                </TextField>
                {/* <TextField 
                    label="street type"
                    onChange={(event) => handleFirstAddressChange(event, 'street_type')}
                >
                </TextField> */}
                <TextField 
                    label="city"
                    onChange={(event) => handleFirstAddressChange(event, 'city')}
                >
                </TextField>
                <TextField 
                    label="state"
                    onChange={(event) => handleFirstAddressChange(event, 'state_code')}
                >
                </TextField>
            </FormControl>
            <FormControl className="address-form">
                <TextField 
                    label="dest address number"
                    onChange={(event) => handleSecondAddressChange(event, 'number')}
                >
                </TextField>
                <TextField 
                    label="street name"
                    onChange={(event) => handleSecondAddressChange(event, 'street_name')}
                >
                </TextField>
                {/* <TextField 
                    label="street type"
                    onChange={(event) => handleSecondAddressChange(event, 'street_type')}
                >
                </TextField> */}
                <TextField 
                    label="city"
                    onChange={(event) => handleSecondAddressChange(event, 'city')}
                >
                </TextField>
                <TextField 
                    label="state"
                    onChange={(event) => handleSecondAddressChange(event, 'state_code')}
                >
                </TextField>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={sendAddressInfo}
                >
                    Send Addresses
                </Button>
            </FormControl>
            <Button 
                variant="contained"
                color="primary"
                onClick={calculateDistance}
            >
                Calculate Distance
            </Button>
            {distanceDisplay()}
        </div>

    )
}

export default LocationTesting;