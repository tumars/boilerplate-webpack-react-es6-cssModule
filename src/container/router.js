import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'

import { Provider } from 'react-redux'
import store from '../store'

import '../styles/animation.less'
import '../styles/button.less'
import '../styles/reset.css'



const Layout = ({ children, location  }) => (
	<main>
		<ReactCSSTransitionGroup
			component="div"
			transitionName="example"
		>
			{React.cloneElement(children, {
				key: location.pathname
			})}
		</ReactCSSTransitionGroup>
	</main>
)

Layout.propTypes = {
	children: React.PropTypes.node,
	location: React.PropTypes.object
}


const App = (
	<Provider store={ store }>
		<Router history={ browserHistory} >
			<Route path="/" component={Layout}>
				<IndexRoute 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('./Homepage/HomeContainer.js').default);
						}, 'HomeContainer');
					}}
				/>
				<Route 
					path="/about" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('./Aboutpage/index.js').default);
						}, 'Aboutpage');
					}}
				/>
				<Route 
					path="/contact" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('./Contactpage/index.js').default);
						}, 'Contactpage');
					}}
				/>
				<Route 
					path="/fundlist" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('./FundListpage/FundListContainer.js').default);
						}, 'FundListContainer');
					}}
				/>
				<Route 
					path="*" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('./NotFound/index.js').default);
						}, 'NotFound');
					}}
				/>
			</Route>
		</Router>
	</Provider>
)

export default App