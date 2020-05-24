import React, { Component } from 'react';
import './PageTitle.css';


class PageTitle extends Component {
    state = {
        frontVisible: true,
        backVisible: true,
    }

    render() {
        const { clazz = '', children } = this.props;
        
        return(
            <div className={`page-title ${ clazz }`}>
                { children }
            </div>
        );
    };
};

export default PageTitle;