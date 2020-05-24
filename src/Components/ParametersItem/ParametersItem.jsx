import React from 'react';
import './ParametersItem.css';

import Image from '../Image/Image';
import Record from '../Record/Record';

const ParametersItem = ({ list, idx, alt, indx }) => {

    const { parameter, points, name } = list;

    return (
        <div className="info__item" key={`info-item${ idx }${ indx + 1 }`} >

            <Image clazz={ 'info__img' } image={ parameter } 
                alt={ alt } />

            <Record clazz={ 'info__text' } text={ points } />
            <Record clazz={ 'info__text' } text={ name } />

        </div>     
    );
};

export default ParametersItem;