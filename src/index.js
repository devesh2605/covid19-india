import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const Main = require("./Main").default;


ReactDOM.render(<Main />, document.getElementById('root')); // eslint-disable-line no-undef
serviceWorker.unregister();