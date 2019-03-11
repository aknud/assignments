import React, { Component } from 'react';
import './App.css';
import Form from "./Form"
import DropItLikeItsHot from './DropItLikeItsHot';
import {withIncrementer} from "./Incrementer";
class App extends Component {
  render() {
    return (
      <div className="App">
       <Form />
       <DropItLikeItsHot />
       <button onClick={this.props.counter}>Click me!</button>
      <p>{this.props.count}</p>
      </div>
    );
  }
}

export default withIncrementer(App);
