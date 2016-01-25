 
import React from 'react'
//import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
//import Dashboard from './components/Dashboard.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
 

export default (
	
		<Router history={browserHistory}>
		    <Route path="/" component={App}>
		        <IndexRoute component={Dashboard} /> 
		        <Route component={Home} path="/home" />
		        <Route component={Dashboard} path="/dashboard" />
		        <Route component={About} path="/about" />
		    </Route>
		</Router>
	
);