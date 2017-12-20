import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import style from './user-info.less'

@CSSModules(style)
class UserInfo extends Component {
	constructor(props) {
        super(props)
    }
	componentDidMount() {
		this.props.getUserInfo()
		this.timer = setInterval(()=>{
			this.props.countTime()
		}, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timer)
	}
	render() {
		const { 
			screenSize,
			countValue
		} = this.props
		
		return (
			<div styleName="wrap">
				<div styleName="title">用户信息</div>
				<p styleName="tip">您的浏览器可视面积为：{screenSize} </p>
				<p styleName="tip">您在本页面呆了：{countValue} 秒</p>
				<div styleName="logo"></div>
			</div>
		)
	}
}

UserInfo.propTypes = {
	countValue: PropTypes.number,
	screenSize: PropTypes.string,
	getUserInfo: PropTypes.func
}

export default UserInfo