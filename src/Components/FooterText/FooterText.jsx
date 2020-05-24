import React from 'react';
import './FooterText.css';

import Logo from '../Logo/Logo';

const Footer = ({ footerText, action, actionObject }) => {
    
    const logoProps = {
        action: action,
        actionObject: actionObject,
    }

    return(
        <div className="footer">
            <Logo { ...logoProps } />
            <p className="footer__text">&copy; { footerText }</p>
        </div>
    )
}

export default Footer;