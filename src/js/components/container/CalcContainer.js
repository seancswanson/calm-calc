import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from '../presentational/CalcDisplay';
import Buttons from '../presentational/CalcButtons';
import Mathjs from 'mathjs-expression-parser';

class CalcContainer extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Calm Calc',
      operations: [],
      displayValue: '0',
      operand: '',
      waitingForOperand: false
    };

    this.handleDigitClick = this.handleDigitClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.handleOperationClick = this.handleOperationClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleToggleNegativeClick = this.handleToggleNegativeClick.bind(this);
    this.handleEvaluateClick = this.handleEvaluateClick.bind(this);
  }

  handleDigitClick(event) {
    let newDigit = '' + event.target.value;
    this.setState(
      {
        displayValue:
          this.state.displayValue === '0'
            ? newDigit
            : this.state.displayValue + newDigit
      },
      () => console.log(this.state.operations)
    );
  }

  handleClearClick(event) {
    this.setState({
      displayValue: '0'
    });
  }

  handleOperationClick(event) {
    let newOperation = event.target.value;
    if (
      isNaN(newOperation) &&
      isNaN(this.state.operations[this.state.operations.length - 1])
    ) {
      this.setState({
        operations: this.state.operations
      });
    } else {
      this.setState(
        {
          operations: this.state.operations.concat(newOperation)
        },
        () => console.log(this.state.operations)
      );
    }
  }

  handleDotClick(event) {
    let decimal = event.target.value;
    if (this.state.displayValue.indexOf(decimal) === -1) {
      this.setState({
        displayValue: this.state.displayValue + decimal
      });
    }
  }

  handleToggleNegativeClick(event) {
    this.setState({
      displayValue:
        this.state.displayValue.charAt(0) === '-'
          ? this.state.displayValue.substr(1)
          : '-' + this.state.displayValue
    });
  }

  handleEvaluateClick(event) {
    evaluateResults();
  }

  evaluateResults() {
    console.log('Evaluating');
  }

  render() {
    const { title, displayValue } = this.state;
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="CalcContainer">
          <Display displayValue={displayValue} />
          <Buttons
            handleDigitClick={this.handleDigitClick}
            handleDotClick={this.handleDotClick}
            handleOperationClick={this.handleOperationClick}
            handleClearClick={this.handleClearClick}
            handleToggleNegativeClick={this.handleToggleNegativeClick}
            handleEvaluateClick={this.handleEvaluateClick}
          />
        </div>
      </div>
    );
  }
}

export default CalcContainer;
