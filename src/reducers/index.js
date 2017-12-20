import { combineReducers } from 'redux'
import { UserReducer } from './user-info'
import { ListReducer } from './data-list'

export default combineReducers({
    UserReducer,
    ListReducer
})