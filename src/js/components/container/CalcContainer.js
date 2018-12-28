import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from '../presentational/CalcDisplay';
import Buttons from '../presentational/CalcButtons';
import Mathjs from 'mathjs-expression-parser';

//----------
const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
};

//----------
class CalcContainer extends Component {
  //----------
  constructor() {
    super();

    this.state = {
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    };

    this.handleDigitClick = this.handleDigitClick.bind(this);
    this.handlePercentClick = this.handlePercentClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.handleOperationClick = this.handleOperationClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleToggleNegativeClick = this.handleToggleNegativeClick.bind(this);
  }

  //----------
  handleDigitClick(event) {
    let newDigit = '' + event.target.value;

    if (this.state.waitingForOperand) {
      this.setState({
        displayValue: String(newDigit),
        waitingForOperand: false
      });
    } else {
      this.setState({
        displayValue:
          this.state.displayValue === '0'
            ? String(newDigit)
            : this.state.displayValue + newDigit
      });
    }
  }

  //----------
  handlePercentClick(event) {
    this.setState({
      displayValue: this.state.displayValue / 100
    });
  }

  //----------
  handleClearClick(event) {
    this.setState({
      value: null,
      displayValue: '0'
    });
  }

  //----------
  handleOperationClick(event) {
    let operator = event.target.value;

    let inputValue = parseFloat(this.state.displayValue);

    if (this.state.value == null) {
      this.setState({
        value: inputValue
      });
    } else if (this.state.operator) {
      const currentValue = this.state.value || 0;
      const newValue = CalculatorOperations[this.state.operator](
        currentValue,
        inputValue
      );

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: operator
    });
  }

  //----------
  handleDotClick(event) {
    let decimal = event.target.value;

    if (this.state.waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      });
    } else if (this.state.displayValue.indexOf(decimal) === -1) {
      this.setState({
        displayValue: this.state.displayValue + decimal,
        waitingForOperand: false
      });
    }
  }

  //----------
  handleToggleNegativeClick(event) {
    this.setState({
      displayValue:
        this.state.displayValue.charAt(0) === '-'
          ? this.state.displayValue.substr(1)
          : '-' + this.state.displayValue
    });
  }

  //----------
  render() {
    const { displayValue } = this.state;
    return (
      <div>
        <div className="CalcContainer">
          <Display displayValue={displayValue} />
          <Buttons
            handleDigitClick={this.handleDigitClick}
            handleDotClick={this.handleDotClick}
            handlePercentClick={this.handlePercentClick}
            handleOperationClick={this.handleOperationClick}
            handleClearClick={this.handleClearClick}
            handleToggleNegativeClick={this.handleToggleNegativeClick}
          />
        </div>
      </div>
    );
  }
}

export default CalcContainer;
