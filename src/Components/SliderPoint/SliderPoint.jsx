import React from 'react';
import './SliderPoint.css';

import Record from '../Record/Record';

const SliderPoint = ({ elem, idx, showSlide, setPointsColor }) => {

    const showPointsNumber = (idx) => (idx < 9) ? `0${ idx + 1 }` : idx + 1;

    const { title } = elem;

    const sliderPointItemProps = {
        onClick: showSlide,
        className: 'slider-points__item',
        id: `sliderPoint-${ idx }`, 
        style: setPointsColor,
    }
    
    return(
        <li { ...sliderPointItemProps } > 
            <Record clazz={ 'slider-points__number' } text={ showPointsNumber(idx) }/>
            <Record clazz={ 'slider-points__title' } text={ title } />
        </li>
    );
};

export default SliderPoint;