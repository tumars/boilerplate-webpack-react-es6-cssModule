import _ut from 'my-util'

/*-----------------------------------------------------------------*/
/*List Reducer*/
/*-----------------------------------------------------------------*/

const initListInfo = {
    movieListInfo: {
        isFetching: false,
        list: []
    },
    bookListInfo: {
        isFetching: false,
        list: []
    }
}

const ListReducer = (state = initListInfo, action) => {
    switch (action.type) {
        case 'LIST_ADD':
            {
                const { target, list } = action;
                const targetName = target == 'movie' ? 'movieListInfo' : 'bookListInfo';
                const oldListInfo = state[targetName];
                let newListInfo;
                
                switch (action.status) {
                    case 'error':
                        {
                            newListInfo = Object.assign({}, oldListInfo, {isFetching: false}) 
                        }
                    break;
                    case 'success':
                        {
                            newListInfo = {
                                list: oldListInfo.list.concat(list.data),
                                isFetching: false
                            }
                        }
                    break;
                    default:
                        {
                            newListInfo = Object.assign({}, oldListInfo, {isFetching: true}) 
                        }
                }
                return Object.assign({}, state, {[targetName]: newListInfo})
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
    status: 'success',
    target, 
    list
})

const fetchStart = () => ({
    type: 'LIST_ADD'
})

const fetchError = () => ({
    type: 'LIST_ADD',
    status: 'error',
})

const clearList = () => ({
    type: 'LIST_CLEAR'
})



/*-----------------------------------------------------------------*/
/*Async List Action Depend on Redux-Thunk*/
/*-----------------------------------------------------------------*/
const fetchAddList = (type) => async dispatch => {
    dispatch(fetchStart())
    try {
        const list = await _ut.fetch(`http://localhost:3003/${type}`)
        dispatch(addList(type, list))
    } catch(e) {
        dispatch(fetchError())
        return Promise.reject()
    }
}



export { 
    ListReducer,
    addList, clearList,
    fetchAddList
}