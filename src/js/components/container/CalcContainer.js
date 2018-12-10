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
    console.log(event.target);
    this.setState({
      lastPressed: event.target.value
    }, () => console.log(this.state));
  }

  handleClearClick(event) {
    console.log(event.target);
    this.setState({
      lastPressed: event.target.value
    }, () => console.log(this.state));
  }

  handleOperationClick(event) {
    console.log(event.target);
    this.setState({
      lastPressed: event.target.value
    }, () => console.log(this.state));
  }

  handleEvaluateClick(event) {
    console.log('Evaluating');
    evaluateResults()
  }

  evaluateResults() {

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
