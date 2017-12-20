import { combineReducers } from 'redux'
import { HomeReducer } from '../view/home/home-reducer'
import { ListReducer } from '../view/list/list-reducer'


export default combineReducers({
    HomeReducer,
    ListReducer
})