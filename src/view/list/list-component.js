import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'mo-button'
import DataListTabs from 'layout/data-list-tabs'
import UserInfo from 'layout/user-info'
import style from './list.less'

class ListComponent extends Component {
	constructor(props) {
        super(props)
    }
	render() {
		const { goBack } = this.props
		return (
			<div className={style.wrap}>
				<DataListTabs />
				<Button bg="#ff5252" onClick={()=>goBack()}>返回首页</Button>
				<UserInfo />
			</div>
		)
	}
}

ListComponent.propTypes = {
	goBack: PropTypes.func
}

export default ListComponent