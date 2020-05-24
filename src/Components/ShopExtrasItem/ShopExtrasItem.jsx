import React from 'react';
import './ShopExtrasItem.css';

import Record from '../Record/Record';
import Image from '../Image/Image';

const ShopExtrasItem = ({ extras, index }) => {

    const { name, photo } = extras;
    const { currency, value } = extras.price;

    const imageProps = {
        clazz: 'img__img',
        image: photo,
        alt: `${ name } img`,
    };

    return(
        <div className="extras__item" key={ index }>
            <div className="extras__img img">
                <Image { ...imageProps } />
            </div>

            <Record text={ name } clazz={ 'extras__text' } />
            <Record text={ `${currency} ${value}` } clazz={ 'extras__price' } />
        </div>
    );
};

export default ShopExtrasItem;