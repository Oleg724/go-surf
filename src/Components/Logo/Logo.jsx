import React from 'react';
import './Logo.css';

const Logo = ({ action, actionObject }) => {

    const anchorProps = {
        href: 'htttp://www.google.com.ua', 
        className: 'logo__logo',
        target: '_blank',
        rel: 'noreferrer noopener',
    };

    return (
        <div className="logo" >
            <a { ... anchorProps } >
                { action }
                <span>{ actionObject }</span>
            </a>
        </div>
    );
};

export default Logo;