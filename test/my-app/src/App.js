import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               {/* <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul> */}
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/home' component={Home} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default App;
