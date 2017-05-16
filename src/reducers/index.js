import { HomeReducer } from '../view/home/home-reducer'
import { ListReducer } from '../view/list/List-reducer'
import { combineReducers } from 'redux'


export default combineReducers({
    HomeReducer,
    ListReducer
})