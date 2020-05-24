import React, { Component } from 'react';
import './FifthPage.css';
import PageTitle from '../../PageTitle/PageTitle';
import PageTitleFront from '../../PageTitleFront/PageTitleFront';
import PageTitleBack from '../../PageTitleBack/PageTitleBack';
import HeadlineTitle from '../../HeadlineTitle/HeadlineTitle';
import Arrows from '../../Arrows/Arrows';
import Headline from '../../Headline/Headline';
import InformationSleep from '../../Information/InformationSleep';
import PageLink from '../../PageLink/PageLink';
import Rates from '../../Rates/Rates';

import fifthPageBgImage from '../../../assets/FifthPageImages/image-sleep.png';
import hammockImage from '../../../assets/FifthPageImages/image-hammock.png';
import frangipaniImage from '../../../assets/FifthPageImages/image-frangipani.png';
import frangipaniSmImage from '../../../assets/FifthPageImages/image-frangipani-sm.png';


export default class FifthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'page-images': [hammockImage, frangipaniSmImage, frangipaniImage],
        }
    };

    updateData = (value) => {
        this.props.updateData(value); 
    };

    render() {
        const { 
            navIcons,
            pageTitle,
            beachList,
            idx,
            links,
            headlines,
        } = this.props;

        const { name: sectionName } = navIcons[2];
        const pageImagesArr = this.state['page-images'];
        const { rating, stars: rate } = beachList[idx].information[2];

        const action = links[3][0];
        const actionObject = links[3][1];

        const pageImages = pageImagesArr.map( (image, indx) => {
            return (
                <div className="image-wrapper" key={ indx }>
                    <img className="image" src={ image } alt={`img-${ indx }`} />
                </div>
            )
        });
        const backGroundImage = { backgroundImage: `url(${ fifthPageBgImage })` };
        
        const arrowsProps = {
            updateData: this.updateData,
            indx: idx,
            list: beachList,
        };

        const headlineTitleProps = {
            headline: headlines[3],
            place: beachList[idx].information[1].resort,
            country: beachList[idx].country,
        };

        return (
            <section name={ sectionName } className="section section--margin-top-150">
                <div className="page-title-wrapper page-title-wrapper--translate">
                    <PageTitle>
                        <PageTitleFront pageTitle={ pageTitle } />
                        <PageTitleBack pageTitle={ pageTitle } />
                    </PageTitle>
                </div>
                <div className="container-wrapper" style={ backGroundImage }>
                    <div className="container container--column">
                        <div className="headline-title-wrapper headline-title-wrapper--padding-160
                            wow fadeInRight" >
                            <HeadlineTitle { ...headlineTitleProps } />
                            <div className="slide-arrows-wrapper">
                                <Arrows { ...arrowsProps } />
                            </div>
                        </div>
                        <div className="headline-wrapper">
                            <Headline title={ rating } subtitle={ headlines[4] } />
                            <div className="rates-wrapper rates-wrapper--align-self">
                                <Rates rate={ rate } />
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="information-wrapper">
                    <InformationSleep idx={ idx } beachList={ beachList } />
                </div>
                <div className="image-wrapper-wrapper">
                    { pageImages }
                </div>
                <div className="links-wrapper links-wrapper--position-center">
                    <PageLink action={ action } actionObject={ actionObject } />
                </div>   
            </section>
        );
    };
};