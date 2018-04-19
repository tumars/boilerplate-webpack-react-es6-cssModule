import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Button from 'mo-button'
import ListTabs from 'layout/list-tabs'
import UserCard from 'layout/user-card'
import style from './list.less'


@CSSModules(style)
class ListComponent extends Component {
	constructor(props) {
        super(props)
    }
	render() {
		const { goBack } = this.props
		return (
			<div styleName="wrap">
				<ListTabs />
				<Button styleName="btn" onClick={()=>goBack()}>返回首页</Button>
				<UserCard />
			</div>
		)
	}
}

ListComponent.propTypes = {
	goBack: PropTypes.func
}

export default ListComponent