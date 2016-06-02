import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'

import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from '../reducers'


const middleware = applyMiddleware(
	routerMiddleware(browserHistory),
	createLogger(),
	thunk,
)

const store = createStore(
	reducers
	// middleware,
)

export default store



