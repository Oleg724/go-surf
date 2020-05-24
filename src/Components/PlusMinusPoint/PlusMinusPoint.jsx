import React, { Component } from 'react';
import './PlusMinusPoint.css';


export default class PlusMinusPoint extends Component {
    state = {
        transform: 'rotate(270deg)',
    };

    updateData = () => {
        const { opacity } = this.props;
        
        if (opacity === 0) { 
            this.props.updateData(1);
            this.setState({ transform: 'rotate(0)' });
        }
        else {
            this.props.updateData(0);
            this.setState({ transform: 'rotate(270deg)' }); 
        }         
    };

    render() {
        const { transform } = this.state;       
        return(
            <div onClick={this.updateData} className="point">
                <span className="point__line" />
                <span className="point__line" style={{ transform: transform }} />
            </div>
        );
    };
};