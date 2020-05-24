import React, { Fragment } from 'react';
import './ParametersItems.css';

import ParametersItem from '../ParametersItem/ParametersItem';

const ParametersItems = ({ list, idx }) => {

    let parametersItems = [];

    parametersItems = list.map( (item, indx) => {
        const newItem = { ...item };           
        const alt = newItem.name.split(' ').shift();

        const parametersItemProps = {
            list: newItem,
            idx: idx,
            alt: alt,
            indx: indx,
            key: indx,
        };

        return (
            <ParametersItem { ...parametersItemProps } />
        );                                          
    });

    return (
        <Fragment>
            { parametersItems }
        </Fragment>      
    );
};

export default ParametersItems;