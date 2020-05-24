import React from 'react';
import './SixthPage.css';

import PageTitle from '../../PageTitle/PageTitle';
import PageTitleFront from '../../PageTitleFront/PageTitleFront';
import PageTitleBack from '../../PageTitleBack/PageTitleBack';
import Arrows from '../../Arrows/Arrows';
import Rates from '../../Rates/Rates';
import Headline from '../../Headline/Headline';
import PageLink from '../../PageLink/PageLink';
import PriceWithDecimal from '../../PriceWithDecimal/PriceWithDecimal';
import ShopExtras from '../../ShopExtras/ShopExtras';
import ShopItem from '../../ShopItem/ShopItem';

import sixthPageBgImage from '../../../assets/SixthPage/image-waves.png';

export default class SixthPage extends React.Component {
    state = {
        indx: 0,
    };

    updateData = (value) => {
        this.setState({ indx: value });
    };

    render() {
        const { 
            navIcons,
            pageTitles,
            headline,
            shop,
            links,
        } = this.props;

        const { name: sectionName } = navIcons[3];
        const { indx } = this.state;
        const { name: title, stars: rate } = shop[indx];
        const { value, currency } = shop[indx].price;

        const action = links[4][0];
        const actionObject = links[4][1];
        
        const backGroundImage = { backgroundImage: `url(${ sixthPageBgImage })` };

        const shopAndIndxProps = {
            shop: shop,
            indx: indx, 
        };

        const arrowsProps = {
            list: shop,
            indx: indx,
            updateData: this.updateData,
        };

        return (
            <section name={ sectionName } className="section section--margin-top-150">
                <div className="page-title-wrapper page-title-wrapper--translate">
                    <PageTitle>
                        <PageTitleFront pageTitle={ pageTitles[4] } />               
                        <PageTitleBack pageTitle={ pageTitles[4] } />
                    </PageTitle>              
                </div>
                <div className="container-wrapper container-wrapper--bg-right" style={ backGroundImage }>
                    <div className="container container--position-relative">
                        <div className="arrows-wrapper arrows-wrapper--position-absolute">
                            <Arrows { ...arrowsProps } />
                        </div>
                        <div className="container__item">
                            <div className="headlines-wrapper headlines-wrapper--padding-bottom">
                                <Headline title={ title } subtitle={ headline } />
                            </div>
                            <div className="rates-price-wrapper">
                                <div className="rates-wrapper rates-wrapper--margin-left">
                                    <Rates rate={ rate } />
                                </div>
                                <PriceWithDecimal value={ value } currency={ currency } />
                            </div>
                            <div className="links-wrapper links-wrapper--position-initial">
                                <PageLink action={ action } actionObject={ actionObject } />
                            </div>
                        </div>
                        <div className="container__item">
                            <ShopItem { ...shopAndIndxProps } />
                        </div>
                        <div className="container__item">
                            <div className="extras-wrapper">                               
                                <ShopExtras { ...shopAndIndxProps } />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};