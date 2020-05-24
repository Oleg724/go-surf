import React from 'react';
import './PageTitleBack.css';

const PageTitleBack = ({ pageTitle }) => {

    return(
        <div className="page-title-back">
            <p className="page-title-back__title">{ pageTitle }</p>
        </div>
    );
};

export default PageTitleBack;