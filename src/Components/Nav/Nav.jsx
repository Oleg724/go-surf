import React from 'react';
import './Nav.css';
import { Link } from "react-scroll";

import Record from '../Record/Record';
import Image from '../Image/Image';

const Nav = ({ navIcons }) => {

    const navItems = navIcons.map( (elem) => {

        const linkProps = {
            activeClass: 'active',
            to: elem.name,
            spy: true,
            smooth: true,
            offset: 80,
            duration: 1500,
            delay: 200,
            className: 'nav__link',
        };

        const imageProps = {
            clazz: 'nav__img',
            image: elem.icon,
            alt: `${elem.name}_icon`,
        };

        const recordProps = {
            clazz: 'nav__title',
            text: elem.name,
        };

        return (
            <li className="nav__item" key={ elem.name }>
                <Link { ...linkProps } >
                    <Image { ...imageProps } />
                    <Record { ...recordProps } />
                </Link>
            </li>
        )
    });

    return (
        <nav className="nav">
            <ul className="nav__list">
                { navItems }
            </ul>
        </nav>
    );
};

export default Nav;