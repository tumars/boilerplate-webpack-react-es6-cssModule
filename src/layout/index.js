import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'


import Homepage from'../container/Homepage';
import Aboutpage from'../container/Aboutpage';
import Contactpage from'../container/Contactpage';
import NotFound from'../container/NotFound';


const Layout = ({ children }) => (
	<main>
		{ children }
	</main>
)


const App = (
 	<Router history={browserHistory}>
    	<Route path="/" component={ Layout }>
    		<IndexRoute component={ Homepage } />
    		<Route path="about" component={ Aboutpage } />
    		<Route path="contact" component={ Contactpage } />
    		<Route path="*" component={ NotFound } />
    	</Route>
 	</Router>
)

export default App