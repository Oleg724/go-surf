import React from 'react';
import './ShopExtras.css';

import ShopExtrasItem from '../ShopExtrasItem/ShopExtrasItem';

const ShopExtras = ({ indx, shop }) => {
         
    const { extras } = shop[indx];

    const shopExtrasItem = extras.map( (item, index) => {

        const extrasItemProps = {
            extras: extras[index],
            indx: indx,
            key: index,
        };

        return index < extras.length && <ShopExtrasItem { ...extrasItemProps } />
    });

    return(
        <div className="extras">
            <p className="extras__title">Extras</p>
            <div className="extras__inner wow fadeInUp"
                data-wow-offset="200">

                { shopExtrasItem }
            </div>
        </div>
    );
};

export default ShopExtras;