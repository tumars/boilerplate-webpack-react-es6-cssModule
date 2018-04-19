/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import _ut from 'my-util'
import { fetchAddList, clearList } from 'reducers/data-list-reducer'
import ListComponent from './component.js'
import Dialog from 'mo-dialog'


const ErrorTip = () => <small>网络出错, 请执行 <b>yarn mock</b> 启动接口</small>
const handleFetchError = (fetchPromise) => {
	Promise.resolve(fetchPromise)
	.then(res=> res)
	.catch(e=>{
		Dialog.alert(<ErrorTip />)
	})
}


const mapDispatchToProps = (dispatch) => {
	const getMovie = () => {
		handleFetchError(dispatch(fetchAddList()))
	}
	return {
		getMovie,
		initData() {
			dispatch(clearList())
			getMovie()
		},
		tabChange(index) {
			console.log(index)
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
	state => state.DataListReducer, 
	formatList
)

const mapStateToProps = (state) => {
    return {
		movieListInfo : selectorMovieList(state)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListComponent)