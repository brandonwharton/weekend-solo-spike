import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

function LocationTesting() {
    // state for storing current location after finding it
    const [currentLocation, setCurrentLocation] = useState({});

    useEffect(() => {
        getLocation();
    }, []);

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

    console.log('local location state', currentLocation);
    return (
        <div className="App-location-testing">
            <Button 
                variant="contained"
                color="primary"
                onClick={getLocation}
            >
                Get Current Location
            </Button>
        </div>

    )
}

export default LocationTesting;