import React from 'react';
import './Rates.css';

import RateStarImage from '../RateStarImage/RateStarImage';

const Rates = ({ rate }) => {

    const stars = Array(rate).map((star, idx) => {
        return <RateStarImage key={ idx } />;
    });

    return(
        <div className="rates">
            { stars }  
        </div>
    );
};

export default Rates;