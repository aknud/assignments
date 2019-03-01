import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './ThemeProvider';
export const {Consumer, Provider} = React.createContext()
//Provider is responsible for holding data, while Consumer is responsible for accessing it.
ReactDOM.render(
    //Provider can be given a default 'value' prop and makes it available to the tree via its children
    <ThemeProvider>    
        <App />
    </ThemeProvider>
, document.getElementById('root'));