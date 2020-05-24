import React from 'react';
import './PageTitleFront.css';

const PageTitleFront = ({ pageTitle }) => {

    return(
        <div className="page-title-front wow flipInY">
            <p className="page-title-front__title">{ pageTitle }</p>
        </div>
    );
};

export default PageTitleFront;