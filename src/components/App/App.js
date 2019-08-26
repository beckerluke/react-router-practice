import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul class="list-inline">
            <li class="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li class="list-inline-item">
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li class="list-inline-item">
            <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
