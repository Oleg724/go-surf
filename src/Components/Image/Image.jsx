import React from 'react';
import './Image.css';

const Image = ({ clazz, image, alt, style = {} }) => {

    return(
        <img className={ clazz } src={ image } alt={ alt } style={ style } />
    );
};

export default Image;