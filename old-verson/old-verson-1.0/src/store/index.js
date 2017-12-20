import { createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'

import reducers from '../reducers'

let store = createStore(
	reducers,
	applyMiddleware(
		thunk
		// createLogger() //打印action与store，开发时使用
	)
)

export default store



