import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import TimeCount from 'mo-time-count'
import style from './user-info.less'

@CSSModules(style)
class UserCard extends Component {
	constructor(props) {
        super(props)
    }
	componentDidMount() {
		this.props.initData()
	}
	componentWillUnmount() {
		this.props.clearHandle()
	}
	render() {
		const { 
			screenSize,
			countValue,
			tomorrow
		} = this.props
		
		return (
			<div styleName="wrap">
				<div styleName="title">用户信息</div>
				<p styleName="tip">您的浏览器可视面积为：{screenSize} </p>
				<p styleName="tip">您在本页面呆了：{countValue} 秒</p>
				<p styleName="tip">距离明天还有：<TimeCount startDate={Date.now()} endDate={tomorrow} showDay={false}/></p>
				<div styleName="logo"></div>
			</div>
		)
	}
}

UserCard.propTypes = {
	countValue: PropTypes.number,
	screenSize: PropTypes.string,
	tomorrow: PropTypes.number,
	initData: PropTypes.func,
	clearHandle: PropTypes.func
}

export default UserCard