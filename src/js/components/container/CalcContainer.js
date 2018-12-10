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
      lastPressed: ''
    };

    this.handleDigitClick = this.handleDigitClick.bind(this)
    this.handleOperationClick = this.handleOperationClick.bind(this)
    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleEvaluateClick = this.handleEvaluateClick.bind(this)
  };

  handleDigitClick(event) {
    let newDigit = event.target.value;
    this.setState({
      operations: this.state.operations.concat(newDigit)
    }, () => console.log(this.state.operations));
  }

  handleClearClick(event) {
    this.setState({
      operations: []
    });
  }

  handleOperationClick(event) {
    let newOperation = event.target.value;
    if (isNaN(newOperation) && isNaN(this.state.operations[this.state.operations.length - 1])) {
      this.setState({
        operations: this.state.operations
      });
    } else {
      this.setState({
        operations: this.state.operations.concat(newOperation)
      }, () => console.log(this.state.operations));
    }
  }

  handleEvaluateClick(event) {
    evaluateResults();
  }

  evaluateResults() {
    console.log('Evaluating');
  }

  render() {
    const { title, operations } = this.state;
    return (
      <div className="CalcContainer">
        <Display data={operations}/>
        <Buttons handleDigitClick={this.handleDigitClick} handleOperationClick={this.handleOperationClick} handleClearClick={this.handleClearClick} handleEvaluateClick={this.handleEvaluateClick}/>
      </div>
    )
  }
}

export default CalcContainer;
