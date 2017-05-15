import { HomeReducer } from '../view/home/homeReducer'
import { ListReducer } from '../view/list/ListReducer'
import { combineReducers } from 'redux'


export default combineReducers({
    HomeReducer,
    ListReducer
})