import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


const initalState = {
  HELLO_TEXT: 'Hi, World!'
}
const changeText = (state = initalState, action) => {
    switch (action.type) {
        case 'sayHi':
            {
                if (state.HELLO_TEXT !== 'hey, Tumars !') return { HELLO_TEXT: 'hey, Tumars !' }
                return initalState
            }

        default:
            return state
    }
}


export default combineReducers({
    changeText,
    routing: routerReducer
})