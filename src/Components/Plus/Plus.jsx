import React from 'react';
import './Plus.css';

import plus from './icon-plus.png';

const Plus = () => {

    return(
        <img className="counter__icon" 
            src={ plus } 
            alt='plus-icon' />
    );
};

export default Plus;