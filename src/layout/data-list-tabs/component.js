import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import SimpleList from 'co-simple-list'
import ListErr from 'mo-list-err'
import Button from 'mo-button'
import Tabs from 'mo-tabs'
import style from './list-tabs.less'

@CSSModules(style)
class ListComponent extends Component {
	constructor(props) {
        super(props)
	}
	
	componentDidMount() {
		this.props.initData()
		this.props.getData('movie', 1)
	}

	handleTabChange(now) {
		const  { bookListInfo: { data } } = this.props
		now == 1 && data.length == 0 && this.props.getData('book', 1)
	}

	renderTables(type, datas) {
		const { getData } = this.props
		const { data, total, now } = datas
		
		return (
			<div styleName="panel">
				{
					data && data.length > 0 
						? 	<div>
								<SimpleList data={data} />
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
		const { movieListInfo, bookListInfo } = this.props
		const MovieList = this.renderTables('movie', movieListInfo)
		const BookList = this.renderTables('book', bookListInfo)

		return (
			<div styleName="wrap">
				<Tabs
					activeIndex={0}
					onTabChange={(prev, now)=> this.handleTabChange(now)}
				>
					<Tabs.Panel title="电影">{MovieList}</Tabs.Panel>
					<Tabs.Panel title="图书">{BookList}</Tabs.Panel>
				</Tabs>
			</div>
		)
	}
}

ListComponent.propTypes = {
	movieListInfo: PropTypes.object,
	bookListInfo: PropTypes.object,
	getData: PropTypes.func
}

export default ListComponent