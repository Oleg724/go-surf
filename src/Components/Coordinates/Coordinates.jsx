import React from 'react';
import './Coordinates.css';

const Coordinates = ({ latitude, longitude }) => {

    const latitudeFixed = latitude.toFixed(4)
    const longitudeFixed = longitude.toFixed(4);

    return (
        <div className="coordinates">
            <p className="coordinates__text">
                { (latitudeFixed > 0) ? latitudeFixed : latitudeFixed }&deg;
                { (latitudeFixed > 0) ? 'E' : 'W' } -  
                { (longitudeFixed > 0) ? longitudeFixed : longitudeFixed }&deg;
                { (longitudeFixed > 0) ? 'N' : 'S' } 
            </p>
        </div>
    );
};

export default Coordinates;