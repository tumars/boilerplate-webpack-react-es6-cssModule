/*-----------------------------------------------------------------*/
/*Home Reducer*/
/*-----------------------------------------------------------------*/
const textBox = ['你好，我是 webpack v2.x 的示例 domo', 'Hello, I am a boilerplate for webpack v2.x ']
const initHomeInfo = {
    helloText: textBox[0],
    userIp: null
}

const HomeReducer = (state = initHomeInfo, action) => {
    switch (action.type) {
        case 'CHANGE_HELLO':
            return Object.assign({}, state, {helloText: state.helloText === textBox[0] ? textBox[1] : textBox[0]})
        case 'GET_USER_IP':
            return Object.assign({}, state, {userIp: action.ip})
        default:
            return state
    }
}


/*-----------------------------------------------------------------*/
/*Home Action*/
/*-----------------------------------------------------------------*/

const changeText = () => ({type: 'CHANGE_HELLO'})
const getUserIp = (ip) => ({type: 'GET_USER_IP', ip})


export { HomeReducer, changeText, getUserIp }