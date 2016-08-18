import { combineReducers } from 'redux'

const initalHelloState = {
  HELLO_TEXT: 'Hi, World!'
}
const changeText = (state = initalHelloState, action) => {
    switch (action.type) {
        case 'sayHi':
            {
                if (state.HELLO_TEXT != action.text ) return { HELLO_TEXT: action.text }
                return initalHelloState;
            }

        default:
            return state
    }
}


export default combineReducers({
    changeText
})