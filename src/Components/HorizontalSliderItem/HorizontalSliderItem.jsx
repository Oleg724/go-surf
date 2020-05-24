import React from 'react';
import './HorizontalSliderItem.css';

import PageLink from '../PageLink/PageLink';
import Record from '../Record/Record';

const HorizontalSliderItem = ({ 
    obj, 
    indx, 
    idx, 
    timeout, 
    action, 
    actionObject,
    changeIdx }) => {

    const { name, place, country, image } = obj;

    const sliderTitleProps = {
        clazz: 'slider-title__title',
        text: name,  
    };

    const itemWrapperProps = {
        className: 'item-wrapper wow fadeInUp',
        'data-wow-delay': `${ timeout }s`,
        'data-wow-offset': '400', 
        key: `image-beach${ indx }`,
    };

    const itemStyle = {
        background: `url(${ image })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const sliderTitleStyle = {
        backgroundColor: `rgba(28,33,33, ${ indx === idx ? ".3" : ".7" })`,
        backgroundSize: 'cover',
    };

    const pageLink = (
        indx === idx
            && (
                <div className="links-wrapper-wrapper"> 
                    <div className="links-wrapper links-wrapper--position-center">
                        <PageLink action={ action } actionObject={ actionObject } />
                    </div> 
                </div>
        )
    );

    return ( 
        <div { ...itemWrapperProps } > 
            <div className="item" style={{ ...itemStyle }}>

                <div className="item__inner slider-title"
                    style={{ ...sliderTitleStyle }}>

                    <div className="slider-title__inner"
                        id={ `item-${ indx }` }
                        onClick={ (e) => changeIdx(e) } >

                        <Record { ...sliderTitleProps } />

                        <div className="slider-title__subtitle">{ place }
                            <span>{ country }</span>
                        </div>
                    </div>
                    
                    { pageLink }

                </div>    
            </div>
        </div>
    );
};

export default HorizontalSliderItem;