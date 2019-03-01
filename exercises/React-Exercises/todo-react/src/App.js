import React, { Component } from 'react';
import TodoList from "./TodoList";
import './App.css';

class App extends Component {


  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
