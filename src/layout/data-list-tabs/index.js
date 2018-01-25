/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import _ut from 'my-util'
import { fetchAddList, clearList } from 'reducers/data-list'
import ListComponent from './component.js'
import Dialog from 'mo-dialog'

const mapDispatchToProps = (dispatch) => {
	const ErrorTip = () => <small>网络出错, 请执行 <b>yarn mock</b> 启动接口</small>
	const getData = async (type, page) => {
		try {
			dispatch(fetchAddList(type, page))
		} catch(e) {
			Dialog.alert(<ErrorTip />, {closeOnClickModal:true})
		}
	}
	return {
		getData,
		initData() {
			dispatch(clearList())
			getData('movie', 1)
		},
		tabChange(index, bookListInfo) {
			const  { list } = bookListInfo;
			index == 1 && !list.length && getData('book', 1)
		}
	}	
}



/* 使用 formatList 将列表转换成其他格式，并使用 reselect 避免重复计算与渲染 */
const formatList = (data)=> {
	if(!data) {return null}
	const { list } = data
	if(!Array.isArray(list)){return data}

	const newList = list.map((item, i)=>
		([i + 1, item.name])
	)

	return Object.assign({}, data, {list: newList})
}

const selectorMovieList = createSelector(
	state => state.ListReducer.movieListInfo, 
	formatList
)
const selectorBookList = createSelector(
	state => state.ListReducer.bookListInfo, 
	formatList
)



const mapStateToProps = (state) => {
	const { movieListInfo, bookListInfo } = state.ListReducer
    return {
		movieListInfo : selectorMovieList(state),
		bookListInfo : selectorBookList(state)
	}
}


const List = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListComponent)

export default List