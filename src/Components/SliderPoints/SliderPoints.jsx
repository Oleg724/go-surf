import React, { Component } from 'react';
import './SliderPoints.css';

import SliderPoint from '../SliderPoint/SliderPoint';

export default class SliderPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
            borderTop: ["4px solid #ffffff", "4px solid #4af6cd"],
        }
    };

    showSlide = (e) => {
        const target = e.target.id;
        const indexOnClick = +target.split('-').pop();
        this.setState({idx: indexOnClick});
        this.props.updateData(indexOnClick);   
    };

    setPointsColor = (idx) => {
        const { borderTop } = this.state;
        const { indx } = this.props;
        return (idx === indx)
            ? { borderTop: borderTop[1] }
            : { borderTop: borderTop[0] };
    };

    render() {
        const { shores } = this.props;

        const sliderPoints = shores.map( (elem, idx) => {
            const { title } = elem;

            const sliderPointProps = {
                elem: elem,
                idx: idx,
                showSlide: this.showSlide,
                title: title, 
                setPointsColor: this.setPointsColor(idx),
                key: idx,
            };

            return <SliderPoint { ...sliderPointProps } />
        })
        
        return(
            <ul className="slider-points">
                { sliderPoints }
            </ul>
        );
    };
};