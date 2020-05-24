import React, { Component } from 'react';
import './ShopItemDetailsInfo.css';

import PlusMinusPoint from '../PlusMinusPoint/PlusMinusPoint';
import ShopItemDetailsInfoText from '../ShopItemDetailsInfoText/ShopItemDetailsInfoText';


export default class ShopItemDetailsInfo extends Component {
    state = {
        opacity: 0,
    }

    updateData = (value) => {
        this.setState({ opacity: value });
    }

    render() {       
        const { index, parameters, length } = this.props;
        const { opacity } = this.state;

        const detailsInfoClassName = (
            index !== length - 1 
                ? "details-info details-info--start" 
                : "details-info details-info--end"
        );

        const detailsInfoInnerClassName = (
            index !== length - 1 
                ? "details-info__inner details-info__inner--before"
                : "details-info__inner details-info__inner--after"
        );

        const plusMinusPoint = (
            index !== length - 1
                && <PlusMinusPoint opacity={ opacity } updateData={ this.updateData } />
        );

        const plusMinusPointLast = (
            index === length - 1
                && <PlusMinusPoint opacity={ opacity } updateData={ this.updateData } />
        );

        return(
            parameters !== '' 
                && (
                    <div className={ detailsInfoClassName }>
                                
                        { plusMinusPoint }

                        <div className={ detailsInfoInnerClassName } style={{ opacity: opacity }} >

                            <ShopItemDetailsInfoText parameters={ parameters } />
                        </div>

                        { plusMinusPointLast }  

                    </div>
                )
        );
    };
};