import { combineReducers } from 'redux'
import { UserReducer } from './user-info-reducer'
import { DataListReducer } from './data-list-reducer'

export default combineReducers({
    UserReducer,
    DataListReducer
})