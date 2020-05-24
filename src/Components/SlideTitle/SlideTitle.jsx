import React from 'react';
import './SlideTitle.css';

import Record from '../Record/Record';

const SlideTitle = ({ indx, shores }) => {

    const { type, title, property, description } = shores[indx];
    
    return(
        <div className="title">
            <Record clazz={ 'title__subtitle' } text={ type } />
            <Record clazz={ 'title__title' } text={ title } />
            <Record clazz={ 'title__subtitle' } text={ property } />
            <Record clazz={ 'title__description' } text={ description } />
        </div>
    );
};

export default SlideTitle;