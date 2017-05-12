import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './home.less'

class HomeComponent extends Component {
	constructor(props) {
        super(props)
    }
	render() {
		const { helloText, userIp, hanldeChangHello, hanldeGoList} = this.props
		return (
			<div className={style.wrap}>
				<p>来自 {userIp} 的朋友</p>
				
				<div onClick={()=>hanldeChangHello()}>{helloText}</div>
				<div onClick={()=>hanldeGoList()}>see list</div>
				<div onClick={()=>hanldeGoList()}>see list</div>
			</div>
		)
	}
}

HomeComponent.propTypes = {
	helloText: PropTypes.string,
	userIp: PropTypes.string,
	hanldeChangHello: PropTypes.func,
	hanldeGoList: PropTypes.func
}

export default HomeComponent