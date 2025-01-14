import './App.css';

import { Link, Route, Router } from "react-router-dom";

import About from './About';
import Home from './Home';
import React from "react";
import Topics from './Topics';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

customHistory.listen(location => {
  console.log('Set page to', location.pathname);
  // eslint-disable-next-line no-undef
  ineum('page', location.pathname);
});

export default function App() {
  return (
    <Router history={customHistory}>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/topics" className="nav-link">Topics</Link>
            </li>
          </ul>
        </nav>

        <div className="content-container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </div>
    </Router>
  );
}
