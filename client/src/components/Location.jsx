import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Location = props => {

    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [accuracy, setAccuracy] = useState('')
    const [altitude, setAltitude] = useState('')

    const getLocation = (e) => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else { 
            console.log("Geolocation is not supported by this browser.")
        }
    }

    const showPosition = (position) => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
        setAccuracy(position.coords.accuracy)
        setAltitude(position.coords.altitude)

        console.log(`Latitude: ${position.coords.latitude}`) 
        console.log(`Longitude: ${position.coords.longitude}`)
        console.log(`${position.coords.altitude}`)
        console.log(`${position.coords.altitudeAccuracy}`)
        console.log(`${position.coords.heading}`)
        console.log(`${position.coords.speed}`)
        console.log(`Timestamp: ${position.timestamp}`)
    }


    return (
        <div>
            
            <h2>Location</h2>
            
                <p>Latitude: {lat}</p>
                <p>Longitude: {long}</p>
                <p>accuracy: {accuracy}</p>
                <p>Altitude: {altitude}</p>
            
            <button onClick={ getLocation }>Get Location</button>
        </div>
    )
}
export default Location