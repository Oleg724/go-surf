import React from 'react';
import './SeventhPage.css';

import FooterText from '../../FooterText/FooterText';

const SeventhPage = ({ footerText, links }) => {
      
    const action = links[5][0];
    const actionObject = links[5][1];

    const footerProps = {
        footerText: footerText,
        action: action,
        actionObject: actionObject,
    };

    return(
        <div className="section">
            <div className="footer-wrapper">
                <FooterText { ...footerProps } />
            </div>               
        </div>
    );
};

export default SeventhPage;