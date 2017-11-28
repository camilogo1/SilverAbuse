import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import AsyncComponent from "./components/AsyncComponent";
import Home from './views/Home';
const AsyncMusic = AsyncComponent(() => import("./views/Music"));
const AsyncPress = AsyncComponent(() => import("./views/Press"));
const AsyncGames = AsyncComponent(() => import("./views/Games"));
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
				<Route path="/music" component={AsyncMusic} />
				<Route path="/press" component={AsyncPress} / >
				<Route path="/games" component={AsyncGames} />
		        <Route path="*" component={NoView} />
	        </Switch>
	    </div>
    </HashRouter>
)

export default routes;