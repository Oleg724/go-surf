import React from 'react';
import './HeadlineTitle.css';

import Record from '../Record/Record';

const HeadlineTitle = ({ place, country, headline }) => {

    const headlineRecordProps = {
        clazz: 'headline-title__subtitle',
        text: headline,
    };

    const placeRecordProps = {
        clazz: 'headline-title__title',
        text: place,
    };

    const countryRecordProps = {
        clazz: 'headline-title__title',
        text: country,
    };

    return(
        <div className="headline-title">

            <Record { ...headlineRecordProps } />

            <div className="headline-title__inner">

                <Record { ...placeRecordProps } />
                <Record { ...countryRecordProps } />
            </div>
        </div>
    );
};

export default HeadlineTitle;