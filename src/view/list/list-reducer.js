/*-----------------------------------------------------------------*/
/*List Reducer*/
/*-----------------------------------------------------------------*/

const initListInfo = {
    movieListInfo: {
        data: [],
        total: 1,
        now: 0
    },
    bookListInfo: {
        data: [],
        total: 1,
        now: 0
    }
}
const ListReducer = (state = initListInfo, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            {
                const { target, list } = action
                let targetName = target == 'movie' ? 'movieListInfo' : 'bookListInfo'
                let info = {
                    total: list.total,
                    now: list.now,
                    data: state[targetName].data.concat(list.data)
                }

                return Object.assign({}, state, {[targetName]: info})
            }
        default:
            return state
    }
}


/*-----------------------------------------------------------------*/
/*List Action*/
/*-----------------------------------------------------------------*/

const addList = (target, list) => ({
    type: 'ADD_LIST', 
    target, 
    list
})

export { ListReducer, addList}