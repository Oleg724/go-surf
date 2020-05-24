import React from 'react';
import './Record.css';

const Record = ({ text, clazz = '' }) => {

    return(
        <p className={ clazz }>{ text }</p>
    );
};

export default Record;