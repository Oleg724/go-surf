import React from 'react';
import './LargeLogo.css';

import Record from '../Record/Record';

const LargeLogo = ({ links }) => {

    const largeLogo = links[0].map( (word, idx) => {
        return <div className="large-logo__title" key={word}>

            <Record clazz={ "large-logo__text" } text={ word } />
        </div>
    });

    return (
        <div className="large-logo">
            { largeLogo }
        </div>
    );
};

export default LargeLogo;