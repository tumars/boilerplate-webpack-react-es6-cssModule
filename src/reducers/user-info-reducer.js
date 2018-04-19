/*-----------------------------------------------------------------*/
/*User Reducer*/
/*-----------------------------------------------------------------*/
const getTomorrow = () => {
    const now = new Date(),
        date = now.getDate() + 1;

    return Date.parse(new Date(now.getFullYear(), now.getMonth(), date))
}


const initUserInfo = {
    screenSize: null,
    countValue:0,
    tomorrow: getTomorrow()
}

const UserReducer = (state = initUserInfo, action) => {
    switch (action.type) {
        case 'USER_INFO':
            return Object.assign({}, state, {screenSize: action.info})
        case 'USER_INCREMENT':
            return Object.assign({}, state, {countValue: state.countValue + action.num})
        case 'USER_CLEAR_COUNT':
            return Object.assign({}, state, {countValue: 0})
        default:
            return state
    }
}


/*-----------------------------------------------------------------*/
/*User Action*/
/*-----------------------------------------------------------------*/
const changeUserInfo = (info) => ({type: 'USER_INFO', info})
const increaseCount = (num=1) => ({type: 'USER_INCREMENT', num})
const clearCount = () => ({type: 'USER_CLEAR_COUNT'})


export { 
    UserReducer, 
    changeUserInfo, 
    increaseCount ,
    clearCount
}