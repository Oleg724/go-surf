import React, { Component } from 'react';
import './Header.css';

import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import CurrentDate from '../CurrentDate/CurrentDate';
import Location from '../Location/Location';
import LargeLogo from '../LargeLogo/LargeLogo';
import RightArrows from '../RightArrows/RightArrows';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            showBlock: "",
        };    
    };

    updateLatitude = (value) => {
        this.props.updateLatitude(value);
    };

    updateLongitude = (value) => {
        this.props.updateLongitude(value);
    };

    openBlock = () => {
        this.setState({
            left: 0,
            showBlock: true
        });
    };

    closeBlock = () => {
        this.setState({
            left: "-112px",
            showBlock: false
        });
    };

    updateValue = (value) => {
        (value === true) ? this.openBlock() : this.closeBlock();
    };

    closeBlockOnStart = () => {
        (window.innerWidth <= 670) ? this.closeBlock() : this.openBlock();
    };

    componentDidMount() {
        this.closeBlockOnStart();
        window.addEventListener('resize', this.closeBlockOnStart);
    };

    render() {
        const { navIcons, links, ...props } = this.props;
        const { left } = this.state;

        const rightArrowsProps = {
            updateValue: this.updateValue,
            left: left,
        };

        return (
            <div className="header" style={{ left: left }}>

                <LargeLogo links={ links } />
                <RightArrows { ...rightArrowsProps } />

                <div className="header__inner">

                    <Nav navIcons={ navIcons } />
                    <Search />

                    <div className="date-wrapper">
                        <CurrentDate />
                    </div>

                    <div className="location-wrapper">
                        <Location { ...props } />
                    </div>

                </div>
            </div>
        );
    };
};