import React, { Component } from 'react'
import DiceBox from "./DiceBox"
import Flip from "./Flip"


class App extends Component {
  render() {
    return (
      <div >
        <DiceBox />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <Flip />
        </div>
      </div>
    );
  }
}

export default App;
