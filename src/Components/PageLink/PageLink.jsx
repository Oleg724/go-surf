import React from 'react';
import './PageLink.css';

import Arrow from '../Arrow/Arrow';

const PageLink = ({ action, actionObject }) => {

    const anchorProps = {
        href: 'https://google.com', 
        className: 'link__link',
        target: '_blank',
        rel: 'noreferrer noopener',
    };

    return (
        <div className="link wow fadeInUp" data-wow-delay="1.2s">
            <a { ...anchorProps }>

                { action } <span>{ actionObject }</span>

                <div className="link__inner">
                    <Arrow />
                </div>
            </a>
        </div>
    );
};

export default PageLink;