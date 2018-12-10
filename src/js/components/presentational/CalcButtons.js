import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const Buttons = ({handleDigitClick, handleOperationClick, handleClearClick, handleEvaluateClick}) => {
  return(
    <div className="ButtonsContainer">

    <Button label="A/C" value="clear" key="clear" handleButtonClick={handleClearClick} />
    <Button label="+/-" value="toggleNegative" key="toggleNegative" handleButtonClick={handleOperationClick} />
    <Button label="%" value="%" key="percentage" handleButtonClick={handleOperationClick} />
    <Button label="/" value="/" key="divide" handleButtonClick={handleOperationClick} />

    <Button label="7" value="7" key="seven" handleButtonClick={handleDigitClick} />
    <Button label="8" value="8" key="eight" handleButtonClick={handleDigitClick} />
    <Button label="9" value="9" key="nine" handleButtonClick={handleDigitClick} />
    <Button label="×" value="*" key="multiply" handleButtonClick={handleOperationClick} />

    <Button label="4" value="4" key="four" handleButtonClick={handleDigitClick} />
    <Button label="5" value="5" key="five" handleButtonClick={handleDigitClick} />
    <Button label="6" value="6" key="six" handleButtonClick={handleDigitClick} />
    <Button label="-" value="-" key="subtract" handleButtonClick={handleOperationClick} />

    <Button label="1" value="1" key="one" handleButtonClick={handleDigitClick} />
    <Button label="2" value="2" key="two" handleButtonClick={handleDigitClick} />
    <Button label="3" value="3" key="three" handleButtonClick={handleDigitClick} />
    <Button label="+" value="+" key="add" handleButtonClick={handleOperationClick} />

    <Button label="0" value="0" key="zero" handleButtonClick={handleDigitClick} />
    <Button label="." value="." key="decimal" handleButtonClick={handleDigitClick} />
    <Button label="=" value="=" key="evaluate" handleButtonClick={handleEvaluateClick} />
    </div>
)
};

export default Buttons;
