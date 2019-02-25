import React, { Component } from 'react';
import SuperShia from "./SuperShia"
const shia = require("./super.json")

class App extends Component {

  catchy = (id) => {
    alert(shia[id].catchPhrase)
  }
  
  render() {

    return (
      <div>
        <SuperShia obj={shia} catchy={this.catchy}/>
      </div>
    );
  }
}

export default App;
