import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import TimeCount from 'mo-time-count'
import style from './user-card.less'

@CSSModules(style)
class UserCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			timeCount: 0
		}
    }
	componentDidMount() {
		this.props.initData()
	}
	render() {
		const { 
			screenSize,
			countValue,
			tomorrow,
			increaseCount
		} = this.props
		
		return (
			<div styleName="wrap">
				<div styleName="title">用户信息</div>
				<p styleName="tip">你的浏览器可视面积为：{screenSize} </p>
				<p styleName="tip">你无聊的点击了：<b styleName="hit" onClick={increaseCount}>+{countValue}</b> 次</p>
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
	increaseCount: PropTypes.func
}

export default UserCard