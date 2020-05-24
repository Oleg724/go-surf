import React from 'react';
import './PriceWithDecimal.css';

import PriceWithDecimalRecord from '../PriceWithDecimalRecord/PriceWithDecimalRecord';

const PriceWithDecimal = ({ value, currency }) => {

    const integerPrice = String(value).split('.').shift();
    const decimalPrice = String(value).split('.').pop();

    const priceProps = {
        currency: currency, 
        integerPrice: integerPrice,
        decimalPrice: decimalPrice,
    };

    return(
        <div className="price">               
            <PriceWithDecimalRecord { ...priceProps } />                  
        </div>
    );
};

export default PriceWithDecimal;