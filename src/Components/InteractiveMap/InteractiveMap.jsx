import React, { Component } from 'react';
import './InteractiveMap.css';

import Coordinates from '../Coordinates/Coordinates';
import InteractiveMapPoint from '../InteractiveMapPoint/InteractiveMapPoint';
import InteractiveMapInfoCard from '../InteractiveMapInfoCard/InteractiveMapInfoCard';

export default class InteractiveMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 1,
            display: 'none',
        };
    };

    static getDerivedStateFromProps(props, state) {
        return { idx: props.idx };
    };

    showInfoBlockOnStart = (index) => {
        const { idx } = this.props;
        return idx === index ? {display: 'flex'} : {display: 'none'}
    };

    showInfoBlock = (e) => {
        const index = +e.target.id.split('-').pop();
        this.showInfoBlockOnStart(index); 
        this.props.updateData(index);
    };
    

    render() {
        const { beachList, latitude, longitude, idx } = this.props;
        let animationTimeout = 1.1;

        const mapProps = {
            className: 'interactive-map wow zoomInDown',
            'data-wow-offset': '350',
            'data-wow-duration': '1.5s',
        };

        const mapPlaces = beachList.map( (obj, index) => {
            const { parameters, place, country } = obj;
            animationTimeout += 0.3;

            const mapDotProps = {
                className: 'interactive-map__dots slider-dots',                       
                key: `interactive-map-dots${index + 1}`,
            };

            const pointProps = {
                timeout: animationTimeout, 
                showInfoBlock: (e) => this.showInfoBlock(e),
                showInfoBlockOnStart: this.showInfoBlockOnStart(index),
                index: index,
            };

            const infoCardProps = {
                index: index ,
                idx: idx,
                parameters: parameters,
                place: place,
                country: country,
                showInfoBlockOnStart: this.showInfoBlockOnStart(index),
            };

            return (
                <div { ...mapDotProps } >
                    <InteractiveMapInfoCard { ...infoCardProps } />
                    <InteractiveMapPoint { ...pointProps } />
                </div>
            );
        });

        return(
            <div { ...mapProps } >

                { mapPlaces } 

                <div className="coordinates-wrapper">
                    <Coordinates latitude={latitude} longitude={longitude} />
                </div>   
            </div>
        );
    };
};