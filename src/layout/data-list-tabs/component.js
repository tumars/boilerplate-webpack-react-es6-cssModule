import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import SimpleList from 'co-simple-list'
import ListErr from 'mo-list-err'
import Button from 'mo-button'
import Tabs from 'mo-tabs'
import style from './list-tabs.less'

@CSSModules(style)
class ListTabs extends Component {
	constructor(props) {
		super(props)
		this.handleTabChange = this.handleTabChange.bind(this)
	}
	
	componentDidMount() {
		this.props.initData()
	}

	handleTabChange(index) {
		const  { bookListInfo: { list } } = this.props
		index == 1 && list.length == 0 && this.props.getData('book', 1)
	}

	renderTables(type, data={}) {
		const { getData } = this.props
		const { list, total, now } = data
		return (
			<div styleName="panel">
				{
					list && list.length > 0 
						? 	<div>
								<SimpleList data={list} />
								{
									now < total &&
									<Button onClick={()=>getData(type, now + 1)}>
										查看更多
										<span styleName="pagina">{now}/{total} 页</span>
									</Button>
								}
							</div>
						: 	<ListErr />
				}
			</div>
		)
	}
	
	render() {
		console.log('data-list-tabs, render ok')
		const { movieListInfo, bookListInfo } = this.props
		const MovieList = this.renderTables('movie', movieListInfo)
		const BookList = this.renderTables('book', bookListInfo)

		return (
			<div styleName="wrap">
				<Tabs
					activeIndex={0}
					onTabChange={(prev, next)=> this.handleTabChange(next)}
				>
					<Tabs.Panel title="电影">{MovieList}</Tabs.Panel>
					<Tabs.Panel title="图书">{BookList}</Tabs.Panel>
				</Tabs>
			</div>
		)
	}
}

ListTabs.propTypes = {
	movieListInfo: PropTypes.object,
	bookListInfo: PropTypes.object,
	getData: PropTypes.func
}

export default ListTabs