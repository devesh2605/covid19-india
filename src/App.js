import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import DeepDive from './screens/DeepDive';
import DeepDiveStateWise from './screens/DeepDiveStateWise';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/deepDive'} className="nav-link">Deep Dive</Link></li>
                <li><Link to={'/stateWise'} className="nav-link">Deep Dive State Wise</Link></li>
              </ul>
            </nav>
          </div>
          <div className="container-fluid">
            <Switch>
              <Route exact path='/'
                render={(routeProps) => (<Home {...routeProps} />)}
              />
              <Route exact path='/deepDive'
                render={(routeProps) => (<DeepDive {...routeProps} />)}
              />
              <Route exact path='/stateWise'
                render={(routeProps) => (<DeepDiveStateWise {...routeProps} />)}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;