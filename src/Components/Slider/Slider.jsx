import React, { Fragment } from 'react';
import './Slider.css';

import SlideTitle from '../SlideTitle/SlideTitle';
import SliderPoints from '../SliderPoints/SliderPoints';
import Arrow from '../Arrow/Arrow';

const Slider = ({ shores, indx, updateData }) => {

        const slider = shores.map( (item, index) => {
            return index === indx && index < shores.length && index >= 0
                && (
                    <div className="slider__item" style={{backgroundImage: `url(${ item.image })`}} key={`slider${ indx }`}>
                    <div className="slider__inner">                                
                        <SlideTitle shores={ shores } indx={ indx } />
                        <Arrow />
                    </div>
                </div>
                )
        });

        const sliderPoints = {
            shores: shores,
            indx: indx,
            updateData: updateData,
        };

        return(
            <Fragment>
                <div className="slider">
                    { slider }
                </div>

                <SliderPoints { ...sliderPoints } />
            </Fragment>
        );

};

export default Slider;