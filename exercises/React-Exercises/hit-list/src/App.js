import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr: []
    }
  }
  async componentDidMount(){
    let list = await axios.get("http://s3.amazonaws.com/v-school/data/hitlist.json")
    list.data[5].image = "https://pbs.twimg.com/media/DMsGz80VQAAeqfw.jpg";
    this.setState({ arr: list.data})
  }

  render() {
    let mappedArr = this.state.arr.map((item, i) => {
      return (
        <div className="target" key={i + Math.random()}>
          <img style={{height: 300, width: 350, border: "1px solid black"}} src={item.image} alt=""/>
          <h1 className="target-title">{item.name}</h1>
        </div>
      )
    })
    return (
      <div className="main">
        <nav className="nav">
          <img style={{height: 100, width: 200}} src="https://cdn.shopify.com/s/files/1/1877/8853/files/Don-Vito_grande.jpg?v=1501127874" alt=""/> 
          <h1>Don Corleone's Hit List</h1> 
          </nav>
        <div className="target-container">
          {mappedArr}
        </div>
      </div>
    );
  }
}

export default App;
