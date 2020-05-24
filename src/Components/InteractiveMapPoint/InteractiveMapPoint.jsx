import React from 'react';
import './InteractiveMapPoint.css';

import point from './point.svg';

const InteractiveMapPoint = ({ 
    timeout, 
    showInfoBlock, 
    showInfoBlockOnStart, 
    index }) => {

    const imageProps = {
        className: 'slider-dots__img', 
        onClick: showInfoBlock, 
        src: point,   
        id: `dot-${ index }`,
    };
        
    return(
        <div className="slider-dots__point wow fadeInUpBig"
            data-wow-delay={ `${ timeout }s` }>

            <div className="slider-dots__triangle" style={ showInfoBlockOnStart }/>
            <img { ...imageProps } alt='point-icon' />
        </div>
    );
};

export default InteractiveMapPoint;