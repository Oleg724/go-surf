import React from 'react';
import './InformationName.css';

const InformationName = ({ children }) => {

    return (
        <div className="information__description">
            { children }
        </div>
    );
};

export default InformationName;