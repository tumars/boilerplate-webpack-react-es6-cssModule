/*-----------------------------------------------------------------*/
/*Home Reducer*/
/*-----------------------------------------------------------------*/
const textBox = ['你好，我是个简单的示例 domo', 'Hello, I am a simple boilerplate']
const initHomeInfo = {
    helloText: textBox[0],
    userInfo: null
}

const HomeReducer = (state = initHomeInfo, action) => {
    switch (action.type) {
        case 'CHANGE_HELLO':
            return Object.assign({}, state, {helloText: state.helloText === textBox[0] ? textBox[1] : textBox[0]})
        case 'GET_USER_INFO':
            return Object.assign({}, state, {userInfo: action.info})
        default:
            return state
    }
}


/*-----------------------------------------------------------------*/
/*Home Action*/
/*-----------------------------------------------------------------*/

const changeText = () => ({type: 'CHANGE_HELLO'})
const getUserInfo = (info) => ({type: 'GET_USER_INFO', info})


export { HomeReducer, changeText, getUserInfo }