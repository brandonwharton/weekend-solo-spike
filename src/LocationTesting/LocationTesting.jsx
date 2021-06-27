import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import './LocationTesting.css';

function LocationTesting() {
    // state for storing current location after finding it
    const [currentLocation, setCurrentLocation] = useState({});
    // states for storing address input data
    const [firstAddress, setFirstAddress] = useState({
        number: 0,
        street_name: '',
        city: '',
        state_code: ''
    });
    const [secondAddress, setSecondAddress] = useState({
        number: 0,
        street_name: '',
        city: '',
        state_code: ''
    });


    useEffect(() => {
        getLocation();
    }, []);

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

    const sendAddressInfo = () => {
        console.log('clicked');
    }

    // console.log('local location state', currentLocation);
    console.log('Current address object', firstAddress);
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
                    label="first address number"
                    onChange={(event) => handleFirstAddressChange(event, 'number')}
                >
                </TextField>
                <TextField 
                    label="street name"
                    onChange={(event) => handleFirstAddressChange(event, 'street_name')}
                >
                </TextField>
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

            
        </div>

    )
}

export default LocationTesting;