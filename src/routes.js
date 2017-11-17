import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Music from './components/Music';
import Press from './components/Press';
import Games from './components/Games';
import NoView from './components/NoView';

const routes = (
    <HashRouter>
	    <div >
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