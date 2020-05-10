import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import './index.css';

import App from "./components/App/App";
import LearnMore from './pages/LearnMore/LearnMore'


const routing = (
    <Router>
        <header>
            <nav className="text-white">
                <div className="brand">
                    <i className="fas fa-car-crash fa-3x"></i>
                </div>
                <ul className="links">
                    <li>
                        <Link to="/" className="link">Save Life</Link>
                    </li>
                    <li>
                        <Link to="rescue-units" className="link">Rescue Units</Link>
                    </li>
                    <li>
                        <Link to="learn-more" className="link">Learn More</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/rescue-units" component={App} />
                <Route path="/learn-more" component={LearnMore} />
            </Switch>

        </header>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
    

serviceWorker.unregister();
