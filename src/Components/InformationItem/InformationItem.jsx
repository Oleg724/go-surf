import React from 'react';
import './InformationItem.css';

const InformationItem = ({ title, timeout, children }) => {

    return (
        <div className="information__item wow fadeInUp"
            data-wow-delay={`${ timeout }s`}>

            <div className="information__title">{ title }</div>
            <div className="information__value">

                { children }

            </div>
        </div>
    );
};

export default InformationItem;