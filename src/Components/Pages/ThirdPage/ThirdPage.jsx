import React from 'react';
import './ThirdPage.css';

import HorizontalSlider from '../../HorizontalSlider/HorizontalSlider';

const ThirdPage = ({ beachList, links, idx, updateData }) => {
        
    const sliderProps = {
        beachList: beachList, 
        updateData: updateData, 
        idx: idx,
        links: links,
    };

    return (
        <section className="section">
            <HorizontalSlider { ...sliderProps } />
        </section>
    );
};

export default ThirdPage;