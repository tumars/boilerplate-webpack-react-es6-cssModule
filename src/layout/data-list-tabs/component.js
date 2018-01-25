import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Tabs from 'mo-tabs'
import Table from './component-table'
import style from './list-tabs.less'


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
			movieListInfo, bookListInfo, 
			tabChange, getData 
		} = this.props

		return (
			<div styleName="wrap">
				<Tabs
					activeIndex={0}
					onTabChange={(prev, next)=> tabChange(next, bookListInfo)}
				>
					<Tabs.Panel title="电影">
						<Table 
							data={movieListInfo} 
							onMore={(index)=>getData('movie', index)}
						/>
					</Tabs.Panel>
					<Tabs.Panel title="图书">
						<Table 
							data={bookListInfo} 
							onMore={(index)=>getData('book', index)}
						/>
					</Tabs.Panel>
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