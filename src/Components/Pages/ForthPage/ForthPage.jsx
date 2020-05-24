import React from 'react';
import './ForthPage.css';

import HeadlineTitle from '../../HeadlineTitle/HeadlineTitle';
import Headline from '../../Headline/Headline';
import PageTitle from '../../PageTitle/PageTitle';
import PageTitleFront from '../../PageTitleFront/PageTitleFront';
import PageTitleBack from '../../PageTitleBack/PageTitleBack';
import InformationTravel from '../../Information/InformationTravel';
import PageLink from '../../PageLink/PageLink';
import Arrows from '../../Arrows/Arrows';

import forthPageBgImage from '../../../assets/ForthPageImages/image-airlie_beach.png';
import coctailImage from '../../../assets/ForthPageImages/image-cocktail.png';

const ForthPage = ({ 
        navIcons, 
        beachList, 
        idx, 
        pageTitle, 
        headlines,
        links,
        updateData, 
    }) => {

    const changeImage = (imagePropName) => {
        const obj = beachList[idx];
        const img = obj.airline[imagePropName];
        return `${ img }`;
    };

    const { name: sectionName } = navIcons[1];
    const { name: title } = beachList[idx].airline;
    const coctailImageFileName = coctailImage.split('-').pop();
    const backgroundImage = { backgroundImage: `url(${ forthPageBgImage })` };
    
    const action = links[2][0];
    const actionObject = links[2][1];

    const cocktailImage = (
        <div className="image-wrapper image-wrapper--bottom">
            <img className="image" src={ coctailImage } alt={ coctailImageFileName }/>
        </div>
    );

    const planeImage = (
        <div className="image-wrapper image-wrapper--top wow slideInRight"
            data-wow-offset="350">
            <img className="image" src={ changeImage('plane-photo') } alt="plane_image"/>
        </div>
    );

    const airlineLogo = (
        <div className="icon">
            <img className="icon__img" src={ changeImage('logo') } alt='airline_icon'/>
        </div>
    );

    const headlineTitleProps = {
        headline: headlines[1],
        place: beachList[idx].name,
        country: beachList[idx].country,
    };

    const arrowsProps = {
        updateData: updateData,
        indx: idx,
        list: beachList,
    };
    
    return (
        <section name={ sectionName } className="section section--margin-top">
            <div className="page-title-wrapper page-title-wrapper--translate" >
                <PageTitle>
                    <PageTitleFront pageTitle={ pageTitle }/>
                    <PageTitleBack pageTitle={ pageTitle }/>
                </PageTitle>
            </div>
            <div className="container-wrapper" style={ backgroundImage }>
                <div className="container container--column">
                    <div className="headline-title-wrapper headline-title-wrapper--padding-160
                        wow fadeInRight">

                        <HeadlineTitle { ...headlineTitleProps } />

                        <div className="slide-arrows-wrapper">
                            <Arrows { ...arrowsProps } />
                        </div>
                    </div>
                    <div className="headline-wrapper">
                        <Headline title={ title } subtitle={ headlines[2] } />

                        { airlineLogo }

                    </div>
                </div>
            </div>
            
            { planeImage }

            <div className="information-wrapper">
                <InformationTravel idx={ idx } beachList={ beachList } />
            </div>

            { cocktailImage }

            <div className="links-wrapper links-wrapper--position-center">
                <PageLink action={ action } actionObject={ actionObject } />
            </div>
            
        </section>
    );
};

export default ForthPage;