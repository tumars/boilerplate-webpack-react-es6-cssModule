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
		},
		async getData(type, page) {
			try {
				const list = await _ut.fetch(`http://localhost:3003/${type}${page}`)
				dispatch(addList(type, list))
			} catch(e) {
				Dialog.alert(<small>网络出错, 请执行 <b>yarn mock</b> 启动接口</small>, {closeOnClickModal:true})
				return false
			}
		}
	}	
}



/* 使用 selectorList 将列表转换成其他格式，并使用 reselect 避免重复计算与渲染 */
const selectorList = createSelector((source)=>source, (source)=>{
	if(!source){return null}
	const data = source.data.map((item, i)=>
		([i + 1, item.name])
	)

	return Object.assign({}, source, {data})
})


const mapStateToProps = (state) => {
	const {movieListInfo, bookListInfo} = state.ListReducer
    return {
        movieListInfo: selectorList(movieListInfo),
		bookListInfo: selectorList(bookListInfo)
	}
}


const List = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListComponent)

export default List