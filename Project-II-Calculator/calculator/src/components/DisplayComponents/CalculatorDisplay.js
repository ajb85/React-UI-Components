import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
   
    return (
        <div className="calculator-display">
            {props.number}
        </div>
    );
}

export default CalculatorDisplay;
