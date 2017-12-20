import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'

import { Provider } from 'react-redux'
import store from '../store'

import '../styles/animation.less'
import '../styles/button.less'
import '../styles/reset.less'



const Layout = ({ children, location  }) => (
	<main>
		<ReactCSSTransitionGroup
			component="div"
			transitionName="carousel"
			transitionEnterTimeout={500} transitionLeaveTimeout={500}
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
							callback(null, require('../view/Homepage').default);
						}, 'HomeContainer');
					}}
				/>
				<Route 
					path="/about" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('../view/Aboutpage').default);
						}, 'Aboutpage');
					}}
				/>
				<Route 
					path="/contact" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('../view/Contactpage').default);
						}, 'Contactpage');
					}}
				/>
				<Route 
					path="/fundlist" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('../view/FundListpage').default);
						}, 'FundListContainer');
					}}
				/>
				<Route 
					path="*" 
					getComponent={(location, callback) => {
						require.ensure([], function (require) {
							callback(null, require('../view/NotFound/index.js').default);
						}, 'NotFound');
					}}
				/>
			</Route>
		</Router>
	</Provider>
)

export default App