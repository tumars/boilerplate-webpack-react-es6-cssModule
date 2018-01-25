import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'


let store = createStore(
	reducers,
	window.devToolsExtension && window.devToolsExtension(),
	applyMiddleware(thunk)
)

export default store



