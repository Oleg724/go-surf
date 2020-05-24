import React from 'react';
import './DownArrows.css';
import downArrows from '../../assets/FirstPageDownArrows/icon_down-arrows.svg';
import { Link } from "react-scroll";
import { Animated } from 'react-animated-css';

import Image from '../Image/Image';

const DownArrows = ({ navIcons }) => {

    const scrollDown = () => {
        let i = 0;
        let j = 40;
        
        const int = setInterval( () => {
            window.scrollTo(0, i);
            i = i + Math.floor((window.innerHeight + 256) / j);
            j += 1.2;
            if (window.pageYOffset >= window.innerHeight + 256) clearInterval(int);
        }, 40);
    };

    const linkProps = {
        className: 'nav__link',
        activeClass: 'active',
        to: navIcons[0].name,
        spy: true,
        smooth: true,
        offset: 80,
        duration: 1500,
        delay: 200,
    };

    const animatedProps = {
        animationIn: 'bounceInLeft',
        animationOut: 'fadeOut',
        isVisible: true,
    };

    const imageFileName = downArrows.split('_')[1];
    const imageProps = {
        clazz: 'down-arrows__img',
        alt: imageFileName,
        image: downArrows,
    };

    return(
        <div className="down-arrows" onClick={ scrollDown } >
            <Link { ...linkProps } >

                <Animated { ...animatedProps } >
                    <Image { ...imageProps } />
                </Animated>

            </Link>
        </div>
    );
};

export default DownArrows;