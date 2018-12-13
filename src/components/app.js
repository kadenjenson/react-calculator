import React, { Component } from 'react';
import * as math from 'mathjs';

import { Button } from './button';
import { Input } from './input';
import { ClearBtn } from './clear';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }

    // usually with React, youre used to writing out a function that is binded and used like below. Thats because youre not utilizing ES6 syntax where you can write out the addToInput function like you do below and it automatically bind itself to this
    // this.addToInput = this.addToInput.bind(this)
  }

  // OLD WAY TO WRITE IT
  // addToInput() {

  // }

  // NEW WAY TO WRITE IT
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  }

  // once you hit the equal sign, it will trigger this function and the mathjs library will look at the current state of the input and perform the calculations on it and then update the state of the input with the answer.
  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) })
  }

  render() {
    return <div className="calc-wrapper">
        <Input input={this.state.input}/>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearBtn handleClear={() => this.setState({ input: "" })}>Clear</ClearBtn>
        </div>
      </div>;
  }
}
