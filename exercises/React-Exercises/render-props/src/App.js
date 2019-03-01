import React from 'react';
import './App.css';
import Toggle from './shared/Toggle';

const App = () => {
    return (
      <div className="App">
        <Toggle render={({on, toggler}) => {
           return (
              <div>
                <h1>The light is {on ? "On" : "Off"}</h1>
                <button onClick={toggler}>Light Switch</button>
              </div>
            )
          }} />
          <Toggle render={({on, toggler}) => {
            return (
              <div>
                <h1>The light is {on ? "On" : "Off"}</h1>
                <button onClick={toggler}>Light Switch</button>
              </div>
            )
            }}
          />
      </div>
    );
}

export default App;
