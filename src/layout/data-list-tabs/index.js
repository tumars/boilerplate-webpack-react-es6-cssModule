/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import _ut from 'my-util'
import { addList, clearList } from 'reducers/data-list'
import ListComponent from './component.js'
import Dialog from 'mo-dialog'

const mapDispatchToProps = (dispatch) => {
	return {
		initData() {
			dispatch(clearList())
			this.getData('movie', 1)
		},
		async getData(type, page) {
			try {
				const list = await _ut.fetch(`http://localhost:3003/${type}${page}`)
				dispatch(addList(type, list))
			} catch(e) {
				console.log(e)
				Dialog.alert(<small>网络出错, 请执行 <b>yarn mock</b> 启动接口</small>, {closeOnClickModal:true})
			}
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