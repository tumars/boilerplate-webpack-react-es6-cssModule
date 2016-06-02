import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import store from '../store'

import Homepage from'../container/Homepage'
import Aboutpage from'../container/Aboutpage'
import Contactpage from'../container/Contactpage'
import NotFound from'../container/NotFound'

const history =  syncHistoryWithStore(browserHistory, store)

const Layout = ({ children }) => (
	<main>
		{ children }
	</main>
)


const App = (
	<Provider store={ store }>
		<Router history={ history} >
	    	<Route path="/" component={ Layout }>
	    		<IndexRoute component={ Homepage } />
	    		<Route path="about" component={ Aboutpage } />
	    		<Route path="contact" component={ Contactpage } />
	    		<Route path="*" component={ NotFound } />
	    	</Route>
	 	</Router>
	</Provider>
)

export default App