import { combineReducers } from 'redux'

/*-----------------------------------------------------------------*/
/*HomeInfo*/
/*-----------------------------------------------------------------*/
const textBox = ['你好，我是 webpack v2.x 的示例 domo', 'Hello, I am a boilerplate for webpack v2.x ']
const initHomeInfo = {
    helloText: textBox[0],
    userIp: null
}

const HomeInfo = (state = initHomeInfo, action) => {
    switch (action.type) {
        case 'CHANGE_HELLO':
            return action.text === state.helloText ? Object.assign({}, state, {text: action.text}) : state
        case 'GET_USER_IP':
            return Object.assign({}, state, {userIp: action.ip})
        default:
            return state
    }
}


/*-----------------------------------------------------------------*/
/*ListInfo*/
/*-----------------------------------------------------------------*/

const initListInfo = []
const ListInfo = (state = initListInfo, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            {
                return state.concat(action.list)
            }
        default:
            return state
    }
}



export default combineReducers({
    HomeInfo,
    ListInfo
})