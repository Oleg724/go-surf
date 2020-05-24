import React, { Component } from 'react';
import './RightArrows.css';
import downArrows from '../../assets/FirstPageDownArrows/icon_down-arrows.svg';

import Image from '../Image/Image';

export default class RightArrows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform: "rotate(-90deg)",
        }
    };

    openParentBlock = () => {
        this.setState({ transform: "rotate(90deg)" });
        this.props.updateValue(true);
    };

    hideParentBlock = () => {
        this.setState({ transform: "rotate(-90deg)" });
        this.props.updateValue(false);
    };

    changeParentsState = () => {
        (this.state.transform === "rotate(-90deg)") ? this.openParentBlock() : this.hideParentBlock() ;
    };

    componentDidMount() {
        (window.innerWidth <= 670) && this.setState({ transform: "rotate(-90deg)" });
    };

    render() {
        const alt = downArrows.split('.')[0];
        const { transform } = this.state;

        const imageProps = {
            clazz: 'right-arrows__img', 
            image: downArrows,
            alt: alt,
            style: { transform: transform },
        };

        return(
            <div onClick={ this.changeParentsState } className="right-arrows" >             
                <Image { ...imageProps } />    
            </div>
        );
    };
};