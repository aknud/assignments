import React, { Component } from 'react';
import './App.css';
import Bounties from './components/Bounties';
import Toggle from "./shared/Toggle";
import Form from "./shared/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bounty Hunter Part III</h1>
        <Toggle render={({on, toggler}) => {
            return (
              <button onClick={toggler}>{on ? <Form /> : "Add another bounty" }</button>
            )
          }}/>
        <Bounties />
      </div>
    );
  }
}

export default App;
