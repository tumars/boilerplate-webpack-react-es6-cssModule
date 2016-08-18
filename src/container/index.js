import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import { Provider } from 'react-redux'

import store from '../store'

import Homepage from'./Homepage'
import Aboutpage from'./Aboutpage'
import Contactpage from'./Contactpage'
import NotFound from'./NotFound'



const Layout = ({ children }) => (
	<main>
		{ children }
	</main>
)

const App = (
	<Provider store={ store }>
		<Router history={ browserHistory} >
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