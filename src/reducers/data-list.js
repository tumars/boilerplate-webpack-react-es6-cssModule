/*-----------------------------------------------------------------*/
/*List Reducer*/
/*-----------------------------------------------------------------*/

const initListInfo = {
    movieListInfo: {
        isFetch: false,
        list: [],
        total: 1,
        now: 0
    },
    bookListInfo: {
        isFetch: false,
        list: [],
        total: 1,
        now: 0
    }
}
const ListReducer = (state = initListInfo, action) => {
    switch (action.type) {
        case 'LIST_ADD':
            {
                const { target, list } = action
                let targetName = target == 'movie' ? 'movieListInfo' : 'bookListInfo'
                let info = {
                    total: list.total,
                    now: list.now,
                    list: state[targetName].list.concat(list.data)
                }
                return Object.assign({}, state, {[targetName]: info})
            }
        case 'LIST_CLEAR':
            {
                return Object.assign({}, state, initListInfo)
            }
        default:
            return state
    }
}


/*-----------------------------------------------------------------*/
/*List Action*/
/*-----------------------------------------------------------------*/

const addList = (target, list) => ({
    type: 'LIST_ADD', 
    target, 
    list
})
const clearList = () => ({
    type: 'LIST_CLEAR'
})

export { ListReducer, addList, clearList}