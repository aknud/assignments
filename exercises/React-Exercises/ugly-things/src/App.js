import React, { Component } from 'react';
import Form from "./components/Form"
import './App.css';
import UglyList from './components/UglyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <UglyList />
      </div>
    );
  }
}

export default App;
