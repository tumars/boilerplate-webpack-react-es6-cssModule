import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Tabs from 'mo-tabs'
import SimpleList from 'co-simple-list'
import InfiniteScroll from 'mo-infinite-scroll'
import ListLoading from 'mo-list-loading'
import Spin from 'mo-spin'
import Segmented from 'mo-segmented'
import style from './list-tabs.less'

const Loader = () => (
	<div style={{textAlign:'center'}}>
		<Spin color="#999"/><span style={{marginLeft: '1em', fontSize:'.8em', color:'#999'}}>加载中</span>
	</div>
)

@CSSModules(style)
class ListTabs extends Component {
	constructor(props) {
		super(props)
	}
	
	componentDidMount() {
		this.props.initData()
	}
	
	render() {
		const { 
			movieListInfo:{list}, 
			tabChange, getMovie
		} = this.props

		return (
			<div styleName="wrap">
				<Tabs
					activeIndex={0}
					onTabChange={(prev, next)=> tabChange(next)}
				>
					<Tabs.Panel title="电影">
						<InfiniteScroll 
							styleName="panel" 
							onLoadMore={getMovie} 
							height={window.innerWidth*0.7 + 'px'}
							loader={<Loader />}
						>
							{
								Array.isArray(list) && list.length > 0
									? <SimpleList data={list} />
									: <ListLoading />
							}
						</InfiniteScroll>
					</Tabs.Panel>

					<Tabs.Panel title="图书" styleName="book-tab">
						<h2>并没有图书列表</h2>
						<h3>来看看无处安放的<b>segmented</b>组件：</h3>	
						<Segmented 
							values={['双截棍', '哼哼', '哈嘿']} 
							tintColor="#fff" 
							tintBg="#4374e0"
							styleName="segmented"
						/>
					</Tabs.Panel>
				</Tabs>
			</div>
		)
	}
}

ListTabs.propTypes = {
	movieListInfo: PropTypes.object,
	getMovie: PropTypes.func,
}

export default ListTabs