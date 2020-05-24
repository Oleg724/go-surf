import React, { Component } from 'react';
import './SecondPage.css';

import PageTitle from '../../PageTitle/PageTitle';
import PageTitleBack from '../../PageTitleBack/PageTitleBack';
import PageTitleFront from '../../PageTitleFront/PageTitleFront';
import InteractiveMap from '../../InteractiveMap/InteractiveMap';
import HeadlineTitle from '../../HeadlineTitle/HeadlineTitle';


export default class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clazz: 'page-title--position-bottom',
        };
    };

    updateData = (value) => {
        this.props.updateData(value); 
    };

    render() {
        const { 
            navIcons,
            pageTitle,
            headline,
            beachList,
            latitude,
            longitude,
            idx,
        } = this.props;
        
        const { name } = navIcons[0];
        const { clazz } = this.state;

        const mapProps = {
            beachList: beachList, 
            updateData: this.updateData, 
            idx: idx,
            latitude: latitude,
            longitude: longitude,
        };

        const headlineTitle = {
            headline: headline,
            place: beachList[idx].place,
            country: beachList[idx].country,
        };
        
        return (
            <section name={ name } className="section section--background" id="map">
                <div className="page-title-wrapper page-title-wrapper--translate">
                    <PageTitle clazz={ clazz } >
                        <PageTitleFront pageTitle={ pageTitle } />               
                        <PageTitleBack pageTitle={ pageTitle } />
                    </PageTitle>
                </div>
                <div className="container">         
                    <div className="headline-title-wrapper headline-title-wrapper--margin-top
                        wow fadeInRight" >
                        <HeadlineTitle { ...headlineTitle } />
                    </div>
                    <InteractiveMap { ...mapProps } />
                </div> 
            </section>
        );
    };
};