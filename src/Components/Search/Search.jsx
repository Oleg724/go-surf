import React from 'react';
import './Search.css';

import searchIcon from '../../assets/FirstPageSearchIcon/icon_search.svg';

import Image from '../Image/Image';

const Search = () => {

    const imageProps = {
        clazz: 'search__img',
        image: searchIcon,
        alt: 'search-icon',
    };

    return (
        <div className="search">
            <a className="search__link" href="/search">
                <Image { ...imageProps } />
            </a>
        </div>
    );
};

export default Search;