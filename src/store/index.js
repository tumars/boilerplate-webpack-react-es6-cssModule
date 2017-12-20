import { createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from "redux-saga"; 
import reducers from '../reducers'

import { watchIncrementAsync } from './sagas'

let store = createStore(
	reducers,
	window.devToolsExtension && window.devToolsExtension(),
	applyMiddleware(createSagaMiddleware(watchIncrementAsync))
)

export default store



