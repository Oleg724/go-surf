import React from 'react';
import './InformationPrice.css';

import Record from '../Record/Record';

const InformationPrice = ({ value, total = null }) => {

    return (
        <div className="information__text text">
            { [ ...value ].map( (elem, indx, arr) => {
                
                return indx === arr.length - 1         
                    ? <Record text={ elem } clazz={ 'text__text text__text--sm' } key={ indx } /> 
                    
                    : (indx === 1 && total !== null)
                        ? <Record text={ total } clazz={ 'text__text' } key={ indx } />
                        : <Record text={ elem } clazz={ 'text__text' } key={ indx } /> })}
        </div> 
    );
};

export default InformationPrice;