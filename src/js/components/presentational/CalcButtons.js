import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const Buttons = ({handleDigitClick, handleDotClick, handleOperationClick, handleClearClick, handleToggleNegativeClick, handleEvaluateClick}) => {
  return(
    <div className="ButtonsContainer">

    <Button label="A/C" value="clear" dataId="clear" handleButtonClick={handleClearClick} />
    <Button label="+/-" value="toggleNegative" dataId="toggleNegative" handleButtonClick={handleToggleNegativeClick} />
    <Button label="%" value="%" dataId="percentage" handleButtonClick={handleOperationClick} />
    <Button label="/" value="/" dataId="divide" handleButtonClick={handleOperationClick} />

    <Button label="7" value="7" dataId="seven" handleButtonClick={handleDigitClick} />
    <Button label="8" value="8" dataId="eight" handleButtonClick={handleDigitClick} />
    <Button label="9" value="9" dataId="nine" handleButtonClick={handleDigitClick} />
    <Button label="×" value="*" dataId="multiply" handleButtonClick={handleOperationClick} />

    <Button label="4" value="4" dataId="four" handleButtonClick={handleDigitClick} />
    <Button label="5" value="5" dataId="five" handleButtonClick={handleDigitClick} />
    <Button label="6" value="6" dataId="six" handleButtonClick={handleDigitClick} />
    <Button label="-" value="-" dataId="subtract" handleButtonClick={handleOperationClick} />

    <Button label="1" value="1" dataId="one" handleButtonClick={handleDigitClick} />
    <Button label="2" value="2" dataId="two" handleButtonClick={handleDigitClick} />
    <Button label="3" value="3" dataId="three" handleButtonClick={handleDigitClick} />
    <Button label="+" value="+" dataId="add" handleButtonClick={handleOperationClick} />

    <Button label="0" value="0" dataId="zero" handleButtonClick={handleDigitClick} />
    <Button label="." value="." dataId="decimal" handleButtonClick={handleDotClick} />
    <Button label="=" value="=" dataId="evaluate" handleButtonClick={handleEvaluateClick} />
    </div>
)
};

export default Buttons;
