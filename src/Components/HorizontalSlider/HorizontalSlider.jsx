import React, { Component } from 'react';
import './HorizontalSlider.css';

import Arrows from '../Arrows/Arrows';
import HorizontalSliderItem from '../HorizontalSliderItem/HorizontalSliderItem';

export default class HorizontalSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 1,
        }
    };

    updateData = (value = 0) => {
        this.setState({ idx: value });
        this.props.updateData(value); 
    };

    changeIdx = (e) => {
        const idx = +e.target.id.split('-').pop();
        this.setState({ idx: idx });
        this.props.updateData(idx); 
    };

    setItemQuantityOnScreen = () => {
        const { innerWidth } = window;
        return innerWidth < 1200 ? -3 : -4;
    };

    setItemQuantityToMove = (itemsOnScreen) => {
        const { idx } = this.props;
        return (
            itemsOnScreen === -4 
                ? ( idx > 2 ? idx - 2 : 0 ) 
                : itemsOnScreen === -3 
                    ? ( idx > 1 ? idx - 1 : 0 ) 
                    : itemsOnScreen === -2 
                        ? ( idx > 0 ? 1 : 0 ) : 0
        )
    };

    render() {
        const { beachList, links, idx } = this.props;
        const { idx: idxState } = this.state;
        const { innerWidth: windowWidth } = window;
        const itemsOnScreen = this.setItemQuantityOnScreen();
        let timeout = 1.2;
    
        const action = links[1][0];
        const actionObject = links[1][1];

        const arrowsProps = {
            list: beachList,
            updateData: this.updateData,
            indx: idxState,
        };

        const positionLeft = (windowWidth / itemsOnScreen) * this.setItemQuantityToMove(itemsOnScreen);

        const carouselProps = {
            className: 'carousel',
            style: { left: `${ positionLeft }px` },
        };

        return(
            <div className="carousel-wrapper">
                <div className="carousel-wrapper__inner">
                    <Arrows { ...arrowsProps } />
                </div>

                <div { ...carouselProps } >

                    {beachList.map( (obj, indx) => {

                        timeout -= .3;

                        const horizontalSliderItem = {
                            obj: obj, 
                            indx: indx,
                            idx: idx,
                            timeout: timeout,
                            action: action,
                            actionObject: actionObject,
                            changeIdx: this.changeIdx,
                            key: indx,
                        };

                        return <HorizontalSliderItem { ...horizontalSliderItem } />;
                    })}

                </div>
            </div>
        );
    };
};