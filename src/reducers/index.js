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
    isloading: false
}

const FundData = (state = initalFundState, action) => {
    switch (action.type) {
        case 'INIT_FUND':
            {
                return Object.assign([], state, {
                    datas: action.item.funddata, 
                    page: action.item.page, 
                    isloading: action.item.isloading
                })
            }
        case 'TURN_PAGE':
            {
                return Object.assign([], state, {
                    datas: state.datas.concat(action.item.funddata), 
                    page: action.item.page, 
                    isloading: action.item.isloading
                })
            }
        default:
            return state
    }
}


export default combineReducers({
    changeText,
    FundData
})