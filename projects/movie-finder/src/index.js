import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StateHolder from "./shared/StateHolder";

ReactDOM.render(
    <StateHolder>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StateHolder>
, document.getElementById('root'));
