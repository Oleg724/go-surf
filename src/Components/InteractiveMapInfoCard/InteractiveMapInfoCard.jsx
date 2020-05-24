import React from 'react';
import './InteractiveMapInfoCard.css';

import Arrow from '../Arrow/Arrow';
import ParametersItems from '../ParametersItems/ParametersItems';
import Record from '../Record/Record';

const InteractiveMapInfoCard = ({ 
    index, 
    idx, 
    parameters, 
    place, 
    country, 
    showInfoBlockOnStart }) => {

    const animationClazz = index === idx && 'wow fadeIn';
    
    const sliderDotInfoBlockProps = {
        className: `slider-dots__info info ${ animationClazz } `,
        'data-wow-delay': '3s', 
        style: showInfoBlockOnStart,
        id: `info-block-${ index }`,
    };

    const anchorProps = {
        className: 'info__link',
        href: 'https://google.com',
        target: '_blank',
        rel: 'noreferrer noopener',
    };

    return(
        <div { ...sliderDotInfoBlockProps } >
            <div className="info__row">
                <div className="info__inner">
                    <Record clazz={ 'info__title' } text={ place } />
                    <Record clazz={ 'info__subtitle' } text={ country } />
                </div>

                <a { ...anchorProps } >
                    <Arrow />
                </a>  
            </div>

            <div className="info__row">
                <ParametersItems list={ parameters } idx={ idx } />
            </div>
        </div>
    );
};

export default InteractiveMapInfoCard;