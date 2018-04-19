import _ut from 'my-util'

/*-----------------------------------------------------------------*/
/*List Reducer*/
/*-----------------------------------------------------------------*/

const initListInfo = {
    isFetching: false,
    list: []
}


const DataListReducer = (state = initListInfo, action) => {
    switch (action.type) {
        case 'LIST_ADD':
            {
                switch (action.status) {
                    case 'error':
                        {
                            return Object.assign({}, state, {
                                isFetching: false
                            }) 
                        }
                    case 'success':
                        {
                            const { list } = action;
                            const oldList = state['list'];
                            return Object.assign({}, {
                                list: oldList.concat(list), 
                                isFetching: false}
                            ) 
                        }
                    default:
                        {
                            return Object.assign({}, state, {
                                isFetching: true
                            }) 
                        }
                }
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
const addList = (list) => ({
    type: 'LIST_ADD', 
    status: 'success',
    list
})

const fetchStart = () => ({
    type: 'LIST_ADD',
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
const fetchAddList = () => async dispatch => {
    dispatch(fetchStart())
    try {
        const list = await _ut.fetch(`http://localhost:3003/movie`)
        dispatch(addList(list.data))
    } catch(e) {
        dispatch(fetchError())
        console.log(e)
        return Promise.reject(e)
    }
}



export { 
    DataListReducer,
    addList, clearList,
    fetchAddList
}