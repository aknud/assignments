import React, { Component } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom"
import Form from "./components/Form";
import './App.css';
import ResultsList from './components/ResultsList';


class App extends Component {

  
  

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Form}/>
          <Route path="/results" component={ResultsList}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
