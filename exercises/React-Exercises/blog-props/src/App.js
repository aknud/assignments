import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BlogList />
        <Footer />
      </div>
    );
  }
}

export default App;
