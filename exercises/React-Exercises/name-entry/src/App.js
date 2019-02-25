import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      namesArray: ["Billy Bob"]
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  addToList = (event) => {
    event.preventDefault()
    let name = `${this.state.firstName} ${this.state.lastName}`
    this.setState((prevState)=>{
      return {
        namesArray: [...prevState.namesArray, name],
        firstName: "",
        lastName: ""
      }
    })
  }




  render() {
    let list = this.state.namesArray.map(name => {
      return (
          <li key={Math.random()}>{name}</li>
      )
    })
    return (
      <div>
        <form name="form" onSubmit={this.addToList}>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} required/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} required/>
          <button>Add to list</button>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
        </form>
        <ul>
          {list}
        </ul>
      </div>
      
    );
  }
}

export default App;
