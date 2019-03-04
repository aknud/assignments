import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StateHolder from './shared/StateHolder';

export const {Consumer, Provider} = React.createContext()

ReactDOM.render(
    <StateHolder>
        <App />
    </StateHolder>
, document.getElementById('root'));
