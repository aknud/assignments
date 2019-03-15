import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StateHolder from "./shared/StateHolder"

ReactDOM.render(
    <StateHolder>
        <App />
    </StateHolder>
, document.getElementById('root'));
