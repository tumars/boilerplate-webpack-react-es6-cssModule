import React from 'react'
import CSSModules from 'react-css-modules'
import SimpleList from 'co-simple-list'
import InfiniteScroll from 'mo-infinite-scroll'
import ListLoading from 'mo-list-loading'
// import Button from 'mo-button'
import Spin from 'mo-spin'
import style from './list-tabs.less'


let Table = ({data:{ isFetching, list }, onLoadMore}) => {
	return (
		<InfiniteScroll 
			styleName="panel" 
			onLoadMore={()=>onLoadMore()} 
			height={window.innerWidth*0.7 + 'px'}
			loader={
				<div style={{textAlign:'center'}}>
					<Spin styleName="spin" visible={isFetching}/><span styleName="pagina">加载更多</span>
				</div>
			}
		>
			{
				Array.isArray(list) && list.length > 0
					?	<SimpleList data={list} />
					:	<ListLoading />
			}
		</InfiniteScroll>
	)
}


export default CSSModules(Table, style)
