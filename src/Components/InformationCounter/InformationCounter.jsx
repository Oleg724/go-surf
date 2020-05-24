import React from 'react';
import './InformationCounter.css';

import PlusMinus from '../PlusMinus/PlusMinus';
import Plus from '../Plus/Plus';
import Minus from '../Minus/Minus';
import Record from '../Record/Record';

const InformationCounter = ({ add, subtract, text }) => {

    const plusMinusProps = {
        add: add,
        subtract: subtract,
    };

    return (
        <div className="information__counter counter">

            <Record text={ text } clazz={ 'counter__text' } />

            <PlusMinus { ...plusMinusProps }
                plus={ <Plus /> } 
                minus={ <Minus /> } />              
        </div> 
    );
};

export default InformationCounter;