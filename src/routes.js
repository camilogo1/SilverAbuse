import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './views/Home';
import Music from './views/Music';
import Press from './views/Press';
import Games from './views/Games';
import NoView from './views/NoView';

const routes = (
    <HashRouter>
	    <div className="bounding-box">
		    <nav className="main_links">
		    	<ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/music">Music</Link></li>
			        <li><Link to="/press">Press</Link></li>
			        <li><Link to="/games"> Games</Link></li>
			    </ul>
			</nav>
	    	<Switch>
		        <Route path="/" exact component={Home} />
		        <Route path="/music" component={Music} />
		        <Route path="/press" component={Press} / >
		        <Route path="/games" component={Games} />
		        <Route path="*" component={NoView} />
	        </Switch>
	    </div>
    </HashRouter>
)

export default routes;