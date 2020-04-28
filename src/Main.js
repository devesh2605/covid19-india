import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import Store from "./store";
import App from "./App";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Provider {...Store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
            </React.Fragment>
        );
    }
}

export default Main;