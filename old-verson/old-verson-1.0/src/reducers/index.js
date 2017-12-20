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

const initalFundState = {
    datas:[],
    page:0,
    isloading: false,
    isShowTip: false
}

const FundPageInfo = (state = initalFundState, action) => {
    switch (action.type) {
        case 'INIT_FUND':
            {
                return Object.assign({}, state, action.item)
            }
        case 'TURN_PAGE':
            {
                return Object.assign({}, state, action.item, {
                    datas: action.item.datas ? state.datas.concat(action.item.datas) : state.datas
                })
            }
        default:
            return state
    }
}


export default combineReducers({
    changeText,
    FundPageInfo
})