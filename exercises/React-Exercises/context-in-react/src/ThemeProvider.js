import React, { Component } from 'react';
import { Provider } from '.';

class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: "dark"
        }
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "dark" ? "light" : "dark"
            }
        })
    }
    render() {
        const props = {
            toggleTheme: this.toggleTheme, ...this.state
        }
        return (
            <Provider value={props}>
                {this.props.children}
            </Provider>
        );
    }
}

export default ThemeProvider;