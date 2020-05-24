import React, { Component } from 'react';
import './FirstPage.css';

import Slider from '../../Slider/Slider';
import Arrows from '../../Arrows/Arrows';
import MapSvg from '../../MapSvg/MapSvg';
import DownArrows from '../../DownArrows/DownArrows';
import PageTitle from '../../PageTitle/PageTitle';
import PageTitleBack from '../../PageTitleBack/PageTitleBack';


class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPageIndx: 0,
            clazz: 'page-title--line-height-140',
        }
    }

    updateData = (value) => {
        this.setState({ firstPageIndx: value });
    }

    render() {
        const { 
            shores,
            pageTitle,
            navIcons,
        } = this.props;
        
        const { firstPageIndx: indx } = this.state;
        const { clazz } = this.state;

        const sliderProps = {
            shores: shores,
            indx: indx,
            updateData: this.updateData,
        };

        const arrowsProps = {
            indx: indx,
            list: shores,
            updateData: this.updateData,
        };

        return (
            <section className="section">
                <div className="page-title-wrapper page-title-wrapper--position-absolute">
                    <PageTitle clazz={ clazz } >
                        <PageTitleBack pageTitle={ pageTitle } />
                    </PageTitle>
                </div>
                <div className="arrows-wrapper arrows-wrapper-position-absolute">
                    <Arrows { ...arrowsProps } />
                </div>
                <MapSvg />
                <div className="slider-wrapper">
                    <Slider { ...sliderProps } />
                </div>
                <DownArrows navIcons={ navIcons } />
            </section>
        )
    }
}

export default FirstPage;