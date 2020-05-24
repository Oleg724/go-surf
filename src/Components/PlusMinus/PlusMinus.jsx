import React from 'react';
import './PlusMinus.css';

const PlusMinus = ({ plus, minus, add, subtract }) => {

    return (
        <div className="counter__icons">
            <div className="counter__inner" onClick={ add } >
                { plus }
            </div>
            <div className="counter__inner" onClick={ subtract } >
                { minus }
            </div>
        </div>
    );
};

export default PlusMinus;