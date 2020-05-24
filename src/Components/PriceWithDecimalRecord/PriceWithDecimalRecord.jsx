import React from 'react';
import './PriceWithDecimalRecord.css';

const PriceWithDecimalRecord = ({ currency, integerPrice, decimalPrice }) => {
        
    return (
        <p className="price__item">
            { currency }{ integerPrice } <span>{ decimalPrice }</span>
        </p>      
    );
};

export default PriceWithDecimalRecord;