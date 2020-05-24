import React from 'react';
import './RateStarImage.css';

import starIcon from '../../assets/RateStar/icon-star.png';

const RateStarImage = () => {

    return (
        <img className="rates__img" src={ starIcon } alt="star-icon" />
    );
};

export default RateStarImage;