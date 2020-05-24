import React from 'react';
import './ShopItem.css';

import ShopItemDetailsInfo from '../ShopItemDetailsInfo/ShopItemDetailsInfo';
import Image from '../Image/Image';

const ShopItem = ({ indx, shop }) => {

    const { parameters, name, photo } = shop[indx];
    const alt = `${ name } img`;

    const shopItemDetailsInfo = Object.values(parameters).map( (param, index, arr) => {

        const detailsProps = {
            parameters: param,
            index: index,
            length: arr.length,
        };

        return <div className="shop-item__description details-info-wrapper" key={ index }>                            
            <ShopItemDetailsInfo { ...detailsProps } />
        </div>
    });

    return(
        <div className="shop-item wow fadeInUp" data-wow-offset="400">      
            <div className="shop-item__inner">

                <Image clazz={ 'shop-item__img' } image={ photo } alt={ alt } />
                { shopItemDetailsInfo }
                
            </div>
        </div>
    );
};

export default ShopItem;