import React from 'react';
import './ShopItemDetailsInfoText.css';

import Record from '../Record/Record';

const ShopItemDetailsInfoText = ({ parameters }) => {
    
    return(
        <div className="details-info-text">
            <Record text={ parameters } />
        </div>
    );
};

export default ShopItemDetailsInfoText;