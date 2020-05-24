import React from 'react';
import './Headline.css';

import Record from '../Record/Record';

const Headline = ({ title, subtitle }) => {

    const recordSubtitleProps = {
        clazz: 'headline__subtitle',
        text: subtitle,
    };

    const recordTitleProps = {
        clazz: 'headline__title headline__title--left',
        text: title,
    };

    return(
        <div className="headline">
            <Record { ...recordSubtitleProps } />
            <Record { ...recordTitleProps } />
        </div>
    );
};

export default Headline;