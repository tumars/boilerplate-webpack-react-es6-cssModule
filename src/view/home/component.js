import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './home.less'

class HomeComponent extends Component {
	constructor(props) {
        super(props)
    }
	componentDidMount() {
		this.props.handleGetUser()
	}
	render() {
		const { helloText, userIp, hanldeChangHello, hanldeGoList} = this.props
		return (
			<div className={style.wrap}>
				<p className={style.tip}>来自 {userIp} 的朋友</p>
				<p className={style.hello}>{helloText}</p>
				<div className={style.button} onClick={()=>hanldeChangHello()}>切换文字</div>
				<div className={style.button} onClick={()=>hanldeGoList()}>去列表页</div>
			</div>
		)
	}
}

HomeComponent.propTypes = {
	helloText: PropTypes.string,
	userIp: PropTypes.number,
	handleGetUser: PropTypes.func,
	hanldeChangHello: PropTypes.func,
	hanldeGoList: PropTypes.func
}

export default HomeComponent